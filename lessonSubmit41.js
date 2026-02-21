var lessonplanSubmit = document.getElementById("submit-lesson-plan");
class LessonPlanForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.form = document.getElementById('lessonPlanForm');
        this.nextBtn = document.getElementById('nextBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.submitBtn = document.getElementById('submit-lesson-plan');
        this.progressFill = document.getElementById('progressFill');
        this.initEventListeners();
        this.updateProgress();
    }
    initEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextStep());
        this.prevBtn.addEventListener('click', () => this.prevStep());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.form.addEventListener('input', (e) => this.clearError(e.target));
        this.form.addEventListener('change', (e) => this.clearError(e.target));
    }
    validateStep(step) {
        const currentStepElement = document.querySelector(`.step[data-step="${step}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        requiredFields.forEach(field => {
            if (field.offsetParent === null || field.style.display === 'none') {
                return;
            }
            if (!field.value.trim()) {
                this.showError(field, `This field is required`);
                isValid = false;
            } else {
                this.clearError(field);
            }
        });
        if (step === 2) {
            const period = document.getElementById('period')?.value;
            if (period === 'custom_distribution') {
                if (typeof window.validateDistribution === 'function' && !window.validateDistribution()) {
                    if (typeof showLessonNotification === 'function') {
                        showLessonNotification("Time distribution must match the selected session type", "warning");
                    }
                    isValid = false;
                }
            }
        }
        if (step === 4) {
            const studentsOption = document.getElementById('studentsOption')?.value;
            if (studentsOption === 'notset') {
                return isValid;
            }
            const femaleReg = parseInt(document.getElementById('femaleReg')?.value) || 0;
            const maleReg = parseInt(document.getElementById('maleReg')?.value) || 0;
            const femalePres = parseInt(document.getElementById('femalePres')?.value) || 0;
            const malePres = parseInt(document.getElementById('malePres')?.value) || 0;
            if (femalePres > femaleReg) {
                this.showError(document.getElementById('femalePres'), 'Present girls cannot exceed registered girls');
                isValid = false;
            }
            if (malePres > maleReg) {
                this.showError(document.getElementById('malePres'), 'Present boys cannot exceed registered boys');
                isValid = false;
            }
        }
        return isValid;
    }
    validateAllFields() {
        const isBaseline = document.getElementById('subject')?.value === 'Baseline';
        const dateOption = document.getElementById('dateOption')?.value;
        const date = dateOption === 'set' ? document.getElementById('date')?.value : 'skip';
        const topicLesson = isBaseline ? this.getValue('topicLesson') : document.getElementById('topicLesson')?.value;
        const compLesson = isBaseline ? this.getValue('compLesson') : document.getElementById('compLesson')?.value;
        const mainlesson = isBaseline ? this.getValue('mainlesson') : document.getElementById('mainlesson')?.value;
        const refLesson = isBaseline ? this.getValue('refLesson') : document.getElementById('refLesson')?.value;
        const hourCodes = document.getElementById("hourCodes")?.value;
        const minCodes = document.getElementById("minCodes")?.value;
        const school = document.getElementById("school")?.value;
        const teacherName = document.getElementById("teacherName")?.value;
        const subject = document.getElementById("subject")?.value;
        const classes = document.getElementById("classes")?.value;
        const streams = document.getElementById("streams")?.value;
        const period = document.getElementById("period")?.value;
        const studentsOption = document.getElementById("studentsOption")?.value;
        const femaleReg = studentsOption === "set" ? document.getElementById("femaleReg")?.value : "skip";
        const maleReg = studentsOption === "set" ? document.getElementById("maleReg")?.value : "skip";
        const femalePres = studentsOption === "set" ? document.getElementById("femalePres")?.value : "skip";
        const malePres = studentsOption === "set" ? document.getElementById("malePres")?.value : "skip";
        const specificLesson = document.getElementById("specificLesson")?.value;
        const tlmaterials = document.getElementById("tlmaterials")?.value;
        const wrdImp1 = document.getElementById("wrdImp1")?.value;
        const wrdImp2 = document.getElementById("wrdImp2")?.value;
        let customFieldsValid = true;
        if (period === 'custom_duration') {
            const customMinutes = document.getElementById("customMinutes")?.value;
            const periodType = document.getElementById("periodType")?.value;
            customFieldsValid = customMinutes && periodType;
        } else if (period === 'custom_distribution') {
            const distributionType = document.getElementById("distributionType")?.value;
            const customTotal = distributionType === 'custom' ? document.getElementById("customTotalMinutes")?.value : true;
            customFieldsValid = distributionType && customTotal && validateDistribution();
        }
        if (
            !hourCodes || !minCodes || !school || !teacherName || (dateOption === 'set' && !date) || 
            !subject || !classes || !streams || !period || !customFieldsValid ||
            (studentsOption === 'set' && (!femaleReg || !maleReg || !femalePres || !malePres)) ||
            !topicLesson || !compLesson || !mainlesson || 
            !refLesson || !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2
        ) {
            return false; 
        }
        return true; 
    }
    getValue(fieldId) {
        const isBaseline = document.getElementById('subject')?.value === 'Baseline';
        if (isBaseline) {
            const textInput = document.querySelector(`input[type="text"][name="${fieldId}"]`);
            if (textInput && textInput.style.display !== 'none') {
                return textInput.value;
            }
        }
        const element = document.getElementById(fieldId);
        return element ? element.value : '';
    }
    showError(field, message) {
        field.classList.add('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
    nextStep() {
        if (this.validateStep(this.currentStep)) {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.updateStep();
            }
        }
    }
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStep();
        }
    }
    updateStep() {
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.step[data-step="${this.currentStep}"]`).classList.add('active');
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                indicator.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                indicator.classList.add('active');
            }
        });
        document.querySelectorAll('.step-label').forEach((label, index) => {
            label.classList.remove('active');
            if (index + 1 === this.currentStep) {
                label.classList.add('active');
            }
        });
        this.prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
        this.nextBtn.style.display = this.currentStep < this.totalSteps ? 'block' : 'none';
        this.submitBtn.style.display = this.currentStep === this.totalSteps ? 'block' : 'none';
        this.updateProgress();
    }
    updateProgress() {
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.validateAllFields()) {
            alert("Make sure You Fill all required selection and space and then click 'SUBMIT'");
            return; 
        }
        if (this.validateStep(this.currentStep)) {
            this.clearSavedData();
            if (typeof updateContent === 'function') {
                updateContent();
            }
            this.showSuccessMessage();
        }
    }
    showSuccessMessage() {
        const container = document.querySelector('.container');
        const successPageHTML = `
            <div class="success-page" style="text-align: center; padding: 40px 20px;">
                <div style="max-width: 600px; margin: 0 auto;">
                    <div style="width: 100px; height: 100px; background: #42b72a; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px;">
                        <i class="bi bi-check-lg" style="color: white; font-size: 50px;"></i>
                    </div>
                    <h2 style="color: #42b72a; margin-bottom: 20px;">Lesson Plan Created Successfully!</h2>
                    <p style="color: #65676b; font-size: 1.125rem; margin-bottom: 30px; text-transform: capitalize; font-weight: 600;">
                        Your lesson plan has been successfully created and saved!
                    </p>
                    <div style="margin: 30px 0;">
                        <button id="createNewBtn" class="btn btn-primary" style="background: #1877f2; color: white; border: none; padding: 12px 24px; font-size: 1rem; cursor: pointer; margin-right: 12px;">
                            Create New Lesson Plan
                        </button>
                        <button id="viewFormBtn" class="btn btn-secondary" style="background: #e4e6eb; color: #050505; border: none; padding: 12px 24px; font-size: 1rem; cursor: pointer;">
                            View Form Data
                        </button>
                    </div>
                    <div style="margin-top: 30px; padding: 18px; background: #f7f8fa;">
                        <p style="color: #65676b; font-size: 0.875rem;">Thank you for using our lesson plan creator!</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = successPageHTML;
        document.getElementById('createNewBtn').addEventListener('click', () => {
            createNewLessonPlan();
        });
        document.getElementById('viewFormBtn').addEventListener('click', () => {
            this.showFormData();
        });
    }
    showFormData() {
        const formData = this.getFormData();
        let dataHTML = '<div style="text-align: left; max-width: 800px; margin: 0 auto;">';
        dataHTML += '<h3 style="color: #050505; margin-bottom: 20px;">Lesson Plan Details</h3>';
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                const label = this.getFieldLabel(key);
                dataHTML += `<p style="margin: 10px 0; padding: 10px; background: #f7f8fa;"><strong>${label}:</strong> ${value}</p>`;
            }
        });
        dataHTML += '<button onclick="history.back()" style="margin-top: 20px; padding: 10px 20px; background: #e4e6eb; color: #050505; border: none; cursor: pointer;">Back to Success Page</button>';
        dataHTML += '</div>';
        const container = document.querySelector('.container');
        container.innerHTML = dataHTML;
    }
    getFormData() {
        const formData = {};
        const formElements = this.form.querySelectorAll('input, select');
        formElements.forEach(element => {
            if (element.name || element.id) {
                const key = element.name || element.id;
                formData[key] = element.value;
            }
        });
        return formData;
    }
    getFieldLabel(fieldName) {
        const labelMap = {
            'hourCodes': 'Hour',
            'minCodes': 'Minutes',
            'school': 'School',
            'teacherName': 'Teacher Name',
            'date': 'Date',
            'subject': 'Subject',
            'classes': 'Class',
            'streams': 'Stream',
            'period': 'Period',
            'femaleReg': 'Female Registered',
            'maleReg': 'Male Registered',
            'femalePres': 'Female Present',
            'malePres': 'Male Present',
            'specificLesson': 'Specific Lesson',
            'tlmaterials': 'Teaching Materials',
            'wrdImp1': 'Word/Improvement 1',
            'wrdImp2': 'Word/Improvement 2'
        };
        return labelMap[fieldName] || fieldName;
    }
    saveFormData() {
        const formData = {};
        const formElements = this.form.querySelectorAll('input, select');
        formElements.forEach(element => {
            if (element.name || element.id) {
                const key = element.name || element.id;
                formData[key] = element.value;
            }
        });
        const dataToSave = {
            formData: formData,
            timestamp: new Date().toISOString(),
            currentStep: this.currentStep
        };
        try {
            localStorage.setItem('lessonPlanFormData', JSON.stringify(dataToSave));
        } catch (error) {
        }
    }
    loadSavedData() {
        try {
            const savedData = localStorage.getItem('lessonPlanFormData');
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                const { formData, timestamp } = parsedData;
                const savedDate = new Date(timestamp);
                const currentDate = new Date();
                const daysDifference = (currentDate - savedDate) / (1000 * 60 * 60 * 24);
                if (daysDifference > 7) {
                    this.clearSavedData();
                    return;
                }
                Object.keys(formData).forEach(key => {
                    const element = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
                    if (element && formData[key]) {
                        element.value = formData[key];
                        element.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
                this.showDataLoadedNotification();
            }
        } catch (error) {
            this.clearSavedData();
        }
    }
    clearSavedData() {
        try {
            localStorage.removeItem('lessonPlanFormData');
        } catch (error) {
        }
    }
    showDataLoadedNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #42b72a;
            color: white;
            padding: 14px 18px;
            z-index: 1000;
            font-size: 0.875rem;
            animation: slideIn 0.3s ease;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="bi bi-check-circle-fill"></i>
                <span>Previous data restored successfully!</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 1.125rem; cursor: pointer; margin-left: 10px;"><i class="bi bi-x-lg"></i></button>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}
function setupAutoFocusNext() {
    const formElements = document.querySelectorAll('#lessonPlanForm input, #lessonPlanForm select');
    formElements.forEach((element, index) => {
        let typingTimer;
        let isUserTyping = false;
        if (element.type === 'text' || element.type === 'number' || element.type === 'date') {
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    clearTimeout(typingTimer);
                    isUserTyping = false;
                    moveToNextField(element, formElements, index);
                    return;
                }
                const navigationKeys = ['Tab', 'Shift', 'Ctrl', 'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
                if (!navigationKeys.includes(e.key)) {
                    isUserTyping = true;
                }
            });
            element.addEventListener('input', function() {
                const currentValue = element.value.trim();
                clearTimeout(typingTimer);
                if (currentValue.length === 0) {
                    isUserTyping = false;
                    return;
                }
                const isLikelyComplete = checkIfEntryComplete(element, currentValue);
                if (isLikelyComplete) {
                    typingTimer = setTimeout(() => {
                        if (element.value.trim() === currentValue && !isUserTyping) {
                            moveToNextField(element, formElements, index);
                        }
                        isUserTyping = false;
                    }, 1500);
                } else {
                    typingTimer = setTimeout(() => {
                        isUserTyping = false;
                    }, 2000);
                }
            });
            element.addEventListener('blur', function() {
                clearTimeout(typingTimer);
                isUserTyping = false;
            });
        }
        if (element.tagName === 'SELECT') {
            element.addEventListener('change', function() {
                moveToNextField(element, formElements, index);
            });
        }
    });
}
function checkIfEntryComplete(element, value) {
    const fieldType = element.type;
    const fieldName = element.name || element.id;
    if (fieldType === 'date') {
        return value.length >= 10;
    }
    if (fieldType === 'number') {
        const num = parseInt(value);
        return !isNaN(num) && num >= 0;
    }
    if (fieldType === 'text') {
        if (fieldName.includes('Name') || fieldName.includes('name')) {
            return value.length >= 2 && /[a-zA-Z]/.test(value);
        }
        if (fieldName.includes('school')) {
            return value.length >= 3 && /[a-zA-Z]/.test(value);
        }
        if (fieldName.includes('material') || fieldName.includes('activity') || fieldName.includes('specific')) {
            return value.length >= 5 && /[a-zA-Z]/.test(value);
        }
        return value.length >= 2;
    }
    return false;
}
function moveToNextField(currentElement, allElements, currentIndex) {
    if (currentElement.value.trim() !== '') {
        for (let i = currentIndex + 1; i < allElements.length; i++) {
            const nextElement = allElements[i];
            const currentStep = document.querySelector('.step.active');
            if (currentStep && currentStep.contains(nextElement)) {
                nextElement.focus();
                break;
            }
        }
    }
}
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function() {
    window.lessonPlanFormInstance = new LessonPlanForm();
    const today = new Date().toISOString().split('T')[0];
    const dateField = document.getElementById('date');
    if (dateField) {
        dateField.value = today;
    }
    setupAutoFocusNext();
    const form = document.getElementById('lessonPlanForm');
    if (form) {
        window.lessonPlanFormInstance.loadSavedData();
        form.addEventListener('input', () => window.lessonPlanFormInstance.saveFormData());
        form.addEventListener('change', () => window.lessonPlanFormInstance.saveFormData());
    }
});
lessonplanSubmit.addEventListener('click', function (mySb) {
    mySb.preventDefault();
    if (!validateFields()) {
        showModernAlert("Please fill all required fields before submitting your lesson plan.", "warning");
        return;
    }
    updateContent(); 
    const container = document.querySelector('.container');
    const formElements = container.querySelectorAll('form, .form-section, .input-group, .form-container, .lesson-form');
    formElements.forEach(element => {
        element.style.display = 'none';
    });
    const childDivs = container.querySelectorAll('div');
    childDivs.forEach(div => {
        if (!div.id.includes('lessonTemp') && 
            !div.classList.contains('lesson-content') && 
            !div.classList.contains('lesson-template') &&
            !div.innerHTML.includes('lesson plan content')) {
            if (div.querySelector('input, select, textarea, button:not(.action-button)') || 
                div.classList.contains('form-group') ||
                div.classList.contains('input-section')) {
                div.style.display = 'none';
            }
        }
    });
    const existingButtons = container.querySelectorAll('.action-button, #downloadPdfBtn');
    existingButtons.forEach(btn => btn.remove());
    const messageContainer = document.createElement("div");
    messageContainer.className = "success-message-container";
    messageContainer.innerHTML = `
        <div class="smc-animated-bg">
            <span class="smc-stripe s1"></span>
            <span class="smc-stripe s2"></span>
            <span class="smc-stripe s3"></span>
            <span class="smc-stripe s4"></span>
        </div>
        <div class="smc-inner">
            <div class="smc-check-wrap">
                <div class="smc-ring smc-ring1"></div>
                <div class="smc-ring smc-ring2"></div>
                <div class="smc-check-circle">
                    <i class="bi bi-check-lg smc-check-icon"></i>
                </div>
            </div>
            <div class="smc-stars" aria-hidden="true">
                <span class="smc-star st1"><i class="bi bi-star-fill"></i></span>
                <span class="smc-star st2"><i class="bi bi-stars"></i></span>
                <span class="smc-star st3"><i class="bi bi-star-fill"></i></span>
                <span class="smc-star st4"><i class="bi bi-stars"></i></span>
                <span class="smc-star st5"><i class="bi bi-star-fill"></i></span>
                <span class="smc-star st6"><i class="bi bi-stars"></i></span>
            </div>
            <h2 class="smc-title">
                <span class="smc-title-line1">Lesson Plan</span>
                <span class="smc-title-line2">Created Successfully!</span>
            </h2>
            <p class="smc-sub">Your lesson plan is ready. Download it as a PDF, view a summary of all your lessons, or start a brand new plan below.</p>
            <div class="smc-divider">
                <span></span><span class="smc-divider-dot"><i class="bi bi-stars"></i></span><span></span>
            </div>
        </div>
    `;
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    const downloadBtn = document.createElement("button");
    downloadBtn.id = "downloadPdfBtn";
    downloadBtn.className = "action-button primary-btn";
    downloadBtn.innerHTML = `
        <i class="bi bi-download"></i>
        <span>Download PDF</span>
    `;
    const backBtn = document.createElement("button");
    backBtn.id = "backBtn";
    backBtn.className = "action-button secondary-btn";
    backBtn.innerHTML = `
        <i class="bi bi-arrow-left-circle"></i>
        <span>Back to Saved Data</span>
    `;
    const newLessonBtn = document.createElement("button");
    newLessonBtn.id = "newLessonBtn";
    newLessonBtn.className = "action-button tertiary-btn";
    newLessonBtn.innerHTML = `
        <i class="bi bi-plus-circle"></i>
        <span>Create New Lesson Plan</span>
    `;
    const summaryBtn = document.createElement("button");
    summaryBtn.id = "summaryBtn";
    summaryBtn.className = "action-button";
    summaryBtn.style.cssText = "background:#42b72a;color:white;";
    summaryBtn.innerHTML = `
        <i class="bi bi-journal-check"></i>
        <span>Summary</span>
    `;
    buttonContainer.appendChild(downloadBtn);
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(newLessonBtn);
    buttonContainer.appendChild(summaryBtn);
    container.appendChild(messageContainer);
    container.appendChild(buttonContainer);
    let _pdfDownloaded = false;
    function _doDownload() {
        const lessonContent = document.querySelector('#lessonTemp, .lesson-content, .lesson-template');
        if (lessonContent) {
            lessonContent.style.display = 'block';
            lessonContent.style.visibility = 'visible';
        }
        downloadDocument();
    }
    downloadBtn.addEventListener('click', function() {
        if (!_pdfDownloaded) {
            _pdfDownloaded = true;
            downloadBtn.innerHTML = '<i class="bi bi-download"></i><span>Download Again (Backup Copy)</span>';
            downloadBtn.style.background = '#f7b928';
            _doDownload();
        } else {
            showConfirmationModal({
                title: "Pakua Tena?",
                message: "Umeshapakua PDF hii tayari.\n\nJe, unataka kuipakua tena kwa nakala ya akiba? Faili mpya itawekwa kwenye folda yako ya upakuaji.",
                confirmText: "Ndio, Pakua Tena",
                confirmClass: "modal-btn-primary",
                onConfirm: function() { _doDownload(); }
            });
        }
    });
    backBtn.addEventListener('click', function() {
        if (typeof resetLessonPlanForm === 'function') {
            resetLessonPlanForm();
        } else {
            location.reload();
        }
        showModernAlert("Returned to saved data view", "info");
    });
    newLessonBtn.addEventListener('click', function() {
        createNewLessonPlan();
    });
    summaryBtn.addEventListener('click', function() {
        showTrackerModal();
    });
    addModernStyles();
    recordLessonPlanToTracker();
    showModernAlert("Lesson plan generated successfully!", "success");
});
function showModernAlert(message, type = "info") {
    const existingAlert = document.querySelector('.modern-alert');
    if (existingAlert) existingAlert.remove();
    const alert = document.createElement('div');
    alert.className = `modern-alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-icon">${getAlertIcon(type)}</span>
            <span class="alert-message">${message}</span>
        </div>
    `;
    document.body.appendChild(alert);
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 3000);
}
function getAlertIcon(type) {
    const icons = {
        success: '<i class="bi bi-check-circle-fill"></i>',
        warning: '<i class="bi bi-exclamation-triangle-fill"></i>',
        error: '<i class="bi bi-x-circle-fill"></i>',
        info: '<i class="bi bi-info-circle-fill"></i>'
    };
    return icons[type] || icons.info;
}
function addModernStyles() {
    if (document.querySelector('#modernLessonPlanStyles')) return;
    const styles = document.createElement('style');
    styles.id = 'modernLessonPlanStyles';
    styles.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

        /* ── Wrapper ── */
        .success-message-container {
            position: relative;
            overflow: hidden;
            background: #0a2a6e;
            color: white;
            text-align: center;
            margin: 0 auto 0 auto;
            max-width: 100%;
            padding: 0;
            animation: smc-drop 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* ── Animated stripe background ── */
        .smc-animated-bg {
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
        }
        .smc-stripe {
            position: absolute;
            top: -40%;
            width: 28%;
            height: 200%;
            opacity: 0.09;
            background: white;
            transform: skewX(-18deg);
        }
        .s1 { left: -6%;  animation: stripe-slide 3.8s 0.0s linear infinite; }
        .s2 { left: 18%;  animation: stripe-slide 3.8s 0.6s linear infinite; }
        .s3 { left: 52%;  animation: stripe-slide 3.8s 1.2s linear infinite; }
        .s4 { left: 76%;  animation: stripe-slide 3.8s 1.8s linear infinite; }
        @keyframes stripe-slide {
            0%   { transform: skewX(-18deg) translateX(0);    opacity: 0.09; }
            50%  { opacity: 0.17; }
            100% { transform: skewX(-18deg) translateX(60px); opacity: 0.09; }
        }

        /* ── Inner content ── */
        .smc-inner {
            position: relative;
            z-index: 2;
            padding: 48px 32px 36px;
        }

        /* ── Ripple rings + check circle ── */
        .smc-check-wrap {
            position: relative;
            width: 110px;
            height: 110px;
            margin: 0 auto 28px;
        }
        .smc-ring {
            position: absolute;
            inset: 0;
            border: 3px solid rgba(255,255,255,0.3);
        }
        .smc-ring1 { animation: ring-pulse 2.2s 0.3s ease-out infinite; }
        .smc-ring2 { animation: ring-pulse 2.2s 1.1s ease-out infinite; }
        @keyframes ring-pulse {
            0%   { transform: scale(1);    opacity: 0.7; }
            100% { transform: scale(1.85); opacity: 0;   }
        }
        .smc-check-circle {
            position: absolute;
            inset: 10px;
            background: #42b72a;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: smc-pop 0.45s 0.2s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes smc-pop {
            0%   { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .smc-check-icon {
            font-size: 2.5rem;
            color: white;
            animation: smc-check-draw 0.4s 0.55s ease both;
        }
        @keyframes smc-check-draw {
            0%   { opacity: 0; transform: scale(0.4) rotate(-20deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        /* ── Floating stars ── */
        .smc-stars { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .smc-star {
            position: absolute;
            color: rgba(255,255,255,0.55);
            font-size: 1.1rem;
            animation: star-float 4s ease-in-out infinite;
        }
        .st1 { top: 12%; left: 8%;  animation-delay: 0.0s; font-size: 0.9rem; }
        .st2 { top: 20%; left: 88%; animation-delay: 0.5s; font-size: 1.2rem; }
        .st3 { top: 60%; left: 5%;  animation-delay: 1.0s; font-size: 0.8rem; }
        .st4 { top: 70%; left: 92%; animation-delay: 1.5s; font-size: 1rem;   }
        .st5 { top: 85%; left: 18%; animation-delay: 2.0s; font-size: 1.1rem; }
        .st6 { top: 80%; left: 80%; animation-delay: 2.5s; font-size: 0.9rem; }
        @keyframes star-float {
            0%, 100% { transform: translateY(0)   rotate(0deg);   opacity: 0.55; }
            50%       { transform: translateY(-14px) rotate(20deg); opacity: 1;    }
        }

        /* ── Title ── */
        .smc-title {
            margin: 0 0 14px;
            line-height: 1.2;
            font-weight: 800;
        }
        .smc-title-line1 {
            display: block;
            font-size: 1.25rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            opacity: 0.75;
            animation: smc-fade-up 0.5s 0.4s both;
        }
        .smc-title-line2 {
            display: block;
            font-size: 2.4rem;
            letter-spacing: -0.5px;
            color: #fff;
            animation: smc-fade-up 0.5s 0.55s both;
        }
        @keyframes smc-fade-up {
            0%   { opacity: 0; transform: translateY(18px); }
            100% { opacity: 1; transform: translateY(0);    }
        }
        .smc-title-line1 { animation: smc-fade-up 0.5s 0.4s both; }

        /* ── Sub text ── */
        .smc-sub {
            margin: 0 auto 22px;
            max-width: 540px;
            font-size: 1rem;
            line-height: 1.65;
            opacity: 0.88;
            animation: smc-fade-up 0.5s 0.7s both;
        }

        /* ── Decorative divider ── */
        .smc-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            animation: smc-fade-up 0.5s 0.85s both;
        }
        .smc-divider span:first-child,
        .smc-divider span:last-child {
            display: block;
            width: 60px;
            height: 2px;
            background: rgba(255,255,255,0.3);
        }
        .smc-divider-dot { font-size: 1rem; opacity: 0.6; }

        /* ── Entrance ── */
        @keyframes smc-drop {
            0%   { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0);     }
        }

        /* ── Button container ── */
        .button-container {
            display: flex;
            gap: 0;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 auto;
            padding: 0;
            background: #f0f2f5;
            border-top: 3px solid #1877f2;
        }

        /* ── Action buttons ── */
        .action-button {
            padding: 16px 22px;
            border: none;
            border-right: 1px solid #d8dadf;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.9375rem;
            display: flex;
            align-items: center;
            gap: 9px;
            justify-content: center;
            text-decoration: none;
            letter-spacing: 0.2px;
            flex: 1;
            min-width: 150px;
            transition: none;
        }
        .action-button:last-child { border-right: none; }
        .action-button i { font-size: 1.125rem; }

        .primary-btn   { background: #42b72a; color: white; }
        .secondary-btn { background: #e4e6eb; color: #050505; }
        .tertiary-btn  { background: #1877f2; color: white; }

        /* ── Alerts ── */
        .modern-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            min-width: 300px;
            padding: 14px 18px;
            animation: slideInRight 0.3s ease;
            font-size: 0.9375rem;
        }
        .alert-success { background: #42b72a; color: white; }
        .alert-warning { background: #f7b928; color: white; }
        .alert-error   { background: #e4405f; color: white; }
        .alert-info    { background: #1877f2; color: white; }
        .alert-content { display: flex; align-items: center; gap: 12px; }
        .alert-icon    { font-size: 1.125rem; display: flex; align-items: center; }
        .alert-message { font-weight: 500; line-height: 1.4; }

        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(80px); }
            to   { opacity: 1; transform: translateX(0);    }
        }

        /* ── Responsive ≤768px ── */
        @media (max-width: 768px) {
            .smc-inner { padding: 32px 18px 24px; }
            .smc-check-wrap { width: 86px; height: 86px; margin-bottom: 20px; }
            .smc-check-icon { font-size: 2rem; }
            .smc-title-line2 { font-size: 1.75rem; }
            .smc-title-line1 { font-size: 1rem; }
            .smc-sub { font-size: 0.9rem; }
            .button-container { flex-direction: column; border-top: 3px solid #1877f2; gap: 0; }
            .action-button { border-right: none; border-bottom: 1px solid #d8dadf; padding: 13px 16px; font-size: 0.875rem; min-width: unset; width: 100%; }
            .action-button:last-child { border-bottom: none; }
            .modern-alert { right: 8px; left: 8px; min-width: auto; top: 8px; padding: 11px 14px; font-size: 0.875rem; }
            .smc-star { display: none; }
        }

        /* ── Responsive ≤480px ── */
        @media (max-width: 480px) {
            .smc-inner { padding: 24px 12px 18px; }
            .smc-check-wrap { width: 72px; height: 72px; margin-bottom: 16px; }
            .smc-check-icon { font-size: 1.6rem; }
            .smc-title-line2 { font-size: 1.4rem; }
            .smc-title-line1 { font-size: 0.875rem; letter-spacing: 0.1em; }
            .smc-sub { font-size: 0.8125rem; }
            .smc-divider span:first-child,
            .smc-divider span:last-child { width: 36px; }
            .action-button { padding: 12px 14px; font-size: 0.8125rem; gap: 7px; }
            .action-button i { font-size: 1rem; }
        }

        @media (prefers-reduced-motion: reduce) {
            .smc-animated-bg,
            .smc-ring,
            .smc-check-circle,
            .smc-check-icon,
            .smc-title-line1,
            .smc-title-line2,
            .smc-sub,
            .smc-divider,
            .smc-star,
            .success-message-container { animation: none; }
        }
    `;
    document.head.appendChild(styles);
}
function validateFields() {
    const isBaseline = document.getElementById("subject")?.value === 'Baseline';
    function getValue(fieldId) {
        if (isBaseline) {
            const textInput = document.querySelector(`input[type="text"][name="${fieldId}"]`);
            if (textInput && textInput.style.display !== 'none') {
                return textInput.value;
            }
        }
        const element = document.getElementById(fieldId);
        return element ? element.value : '';
    }
    const hourCodes = document.getElementById("hourCodes")?.value;
    const minCodes = document.getElementById("minCodes")?.value;
    const school = document.getElementById("school")?.value;
    const teacherName = document.getElementById("teacherName")?.value;
    const dateOption = document.getElementById("dateOption")?.value;
    const date = dateOption === 'set' ? document.getElementById("date")?.value : 'valid';
    const subject = document.getElementById("subject")?.value;
    const classes = document.getElementById("classes")?.value;
    const streams = document.getElementById("streams")?.value;
    const period = document.getElementById("period")?.value;
    const studentsOption = document.getElementById("studentsOption")?.value;
    const femaleReg = studentsOption === "set" ? document.getElementById("femaleReg")?.value : "skip";
    const maleReg = studentsOption === "set" ? document.getElementById("maleReg")?.value : "skip";
    const femalePres = studentsOption === "set" ? document.getElementById("femalePres")?.value : "skip";
    const malePres = studentsOption === "set" ? document.getElementById("malePres")?.value : "skip";
    const specificLesson = document.getElementById("specificLesson")?.value;
    const tlmaterials = document.getElementById("tlmaterials")?.value;
    const wrdImp1 = getValue("wrdImp1");
    const wrdImp2 = getValue("wrdImp2");
    const topicLesson = getValue("topicLesson");
    const compLesson = getValue("compLesson");
    const mainlesson = getValue("mainlesson");
    const refLesson = getValue("refLesson");
    if (
        !hourCodes || !minCodes || !school || !teacherName || !date || !subject || !classes || 
        !streams || !period || 
        (studentsOption === 'set' && (!femaleReg || !maleReg || !femalePres || !malePres)) ||
        !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2 ||
        !topicLesson || !compLesson || !mainlesson || !refLesson
    ) {
        return false; 
    }
    return true; 
}
function userLoadd() {
    document.getElementById("wordToshow").innerText="Thanks!  Your lesson plan will download shortly, please be patient";
    document.getElementById("videoDiv").style.display="block";
    document.getElementById("adDiv").style.display="none";
    document.getElementById("refreshBtn").style.display="block";
    document.getElementById('downloadPdfBtn').style.display="block";
    document.getElementById('downloadPdfBtn').innerText="download lesson plan again";
    document.getElementById("gotoEdit").style.display="none";
}
function downloadDocument() {
    const lessonTemp = document.getElementById('lessonTemp');
    let subjectLook = document.getElementById('subject')?.value || "Downloaded";
    let activityLook = document.getElementById('specificLesson')?.value || "Lesson Plan";
    let defaultName1 = `${subjectLook} ${activityLook}`;
    let defaultName = defaultName1.trim().replace(/\s+/g, "_");
    showDocumentNameModal(defaultName1, (documentName) => {
        const finalName = documentName.trim() === "" ? defaultName : documentName.trim().replace(/\s+/g, "_");
        showPdfLoader();
        setTimeout(() => {
            html2pdf()
                .from(lessonTemp)
                .set({
                    filename: `${finalName}.pdf`,
                    html2canvas: {
                        scale: 4,
                        useCORS: true
                    },
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'portrait'
                    },
                    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
                })
                .outputPdf('blob')
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${finalName}.pdf`;
                    a.click();
                    URL.revokeObjectURL(url);
                    hidePdfLoader();
                    showDownloadSuccessToast(finalName);
                })
                .catch(error => {
                    hidePdfLoader();
                    showLessonNotification("Failed to generate PDF. Please try again.", "error");
                });
        }, 100);
    });
}
function showDocumentNameModal(defaultName, callback) {
    const existingModal = document.querySelector('.document-name-modal');
    if (existingModal) existingModal.remove();
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'document-name-modal-overlay';
    const modal = document.createElement('div');
    modal.className = 'document-name-modal';
    modal.innerHTML = `
        <div class="modal-header">
            <h3><i class="bi bi-file-earmark-text"></i> Save Lesson Plan</h3>
        </div>
        <div class="modal-body">
            <label for="documentNameInput">WEKA JINA LA LESSON PLAN (Mfano: Mr. Academix subject topic 1)</label>
            <input type="text" id="documentNameInput" class="document-name-input" value="${defaultName}" placeholder="Enter document name...">
            <div class="input-hint">Jina litabadilishwa kuwa format ya faili (spaces → underscores)</div>
        </div>
        <div class="modal-footer">
            <button class="modal-btn cancel-btn" onclick="closeDocumentNameModal()">Cancel</button>
            <button class="modal-btn confirm-btn" onclick="confirmDocumentName()">OK - ENDELEA</button>
        </div>
    `;
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    setTimeout(() => {
        const input = document.getElementById('documentNameInput');
        input.focus();
        input.select();
    }, 100);
    window.documentNameCallback = callback;
    document.getElementById('documentNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            confirmDocumentName();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDocumentNameModal();
        }
    });
    addDocumentNameModalStyles();
}
function confirmDocumentName() {
    const input = document.getElementById('documentNameInput');
    const documentName = input.value || input.placeholder;
    if (window.documentNameCallback) {
        window.documentNameCallback(documentName);
        window.documentNameCallback = null;
    }
    closeDocumentNameModal();
}
function closeDocumentNameModal() {
    const modal = document.querySelector('.document-name-modal-overlay');
    if (modal) {
        modal.remove();
    }
    window.documentNameCallback = null;
}
function addDocumentNameModalStyles() {
    if (document.querySelector('#documentNameModalStyles')) return;
    const style = document.createElement('style');
    style.id = 'documentNameModalStyles';
    style.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
        .document-name-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        .document-name-modal {
            background: white;
            width: 90%;
            max-width: 480px;
            max-height: 90vh;
            overflow-y: auto;
            animation: modalSlideIn 0.3s ease-out;
        }
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        .modal-header {
            padding: 16px 20px 14px;
            border-bottom: 1px solid #e4e6eb;
        }
        .modal-header h3 {
            margin: 0;
            color: #050505;
            font-size: 1.125rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .modal-body {
            padding: 20px;
        }
        .modal-body label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #1c1e21;
            font-size: 0.9375rem;
        }
        .document-name-input {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #ccd0d5;
            font-size: 0.9375rem;
            transition: border-color 0.2s ease;
            box-sizing: border-box;
        }
        .document-name-input:focus {
            outline: none;
            border-color: #1877f2;
        }
        .input-hint {
            margin-top: 8px;
            font-size: 0.8125rem;
            color: #65676b;
            font-style: italic;
        }
        .modal-footer {
            padding: 14px 20px 18px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .modal-btn {
            padding: 9px 18px;
            border: none;
            font-size: 0.9375rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s ease;
            min-width: 75px;
        }
        .cancel-btn {
            background-color: #e4e6eb;
            color: #050505;
        }
        .cancel-btn:hover {
            background-color: #d8dadf;
        }
        .confirm-btn {
            background-color: #1877f2;
            color: white;
        }
        .confirm-btn:hover {
            background-color: #166fe5;
        }
        @media (max-width: 640px) {
            .document-name-modal {
                width: 95%;
                margin: 20px;
            }
            .modal-header, .modal-body, .modal-footer {
                padding-left: 16px;
                padding-right: 16px;
            }
            .modal-footer {
                flex-direction: column;
            }
            .modal-btn {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
}
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getCurrentSavedPlan() {
    try {
        const stored = localStorage.getItem('currentLessonPlan');
        if (stored) {
            return JSON.parse(stored);
        }
        const formStored = localStorage.getItem('lessonPlanFormData');
        if (formStored) {
            const parsed = JSON.parse(formStored);
            return {
                name: generateLessonName(parsed.formData || parsed) || 'Saved Lesson Plan',
                data: parsed.formData || parsed,
                timestamp: parsed.timestamp || new Date().toISOString(),
                autoSaved: true
            };
        }
        return null;
    } catch (error) {
        return null;
    }
}

function saveCurrentPlan(formData, isAutoSave = false) {
    try {
        const planData = {
            name: generateLessonName(formData) || 'Untitled Lesson Plan',
            data: formData,
            timestamp: new Date().toISOString(),
            autoSaved: isAutoSave,
            id: generateUniqueId()
        };
        localStorage.setItem('currentLessonPlan', JSON.stringify(planData));
        return true;
    } catch (error) {
        if (error.name === 'QuotaExceededError') {
            showLessonNotification("Storage is full! Cannot save lesson plan.", "warning");
        }
        return false;
    }
}

function clearCurrentSavedPlan() {
    try {
        localStorage.removeItem('currentLessonPlan');
        localStorage.removeItem('lessonPlanFormData');
    } catch (error) {
    }
}
function setupAutoSaveSystem() {
    let autoSaveTimeout;
    const watchFields = ['subject', 'specificLesson', 'date', 'classes', 'teacherName', 'school'];
    watchFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', function() {
                clearTimeout(autoSaveTimeout);
                autoSaveTimeout = setTimeout(() => {
                    performAutoSave();
                }, 2000);
            });
        }
    });
    if (typeof updateContent === 'function') {
        const originalUpdateContent = updateContent;
        window.updateContent = function() {
            originalUpdateContent.apply(this, arguments);
            clearTimeout(autoSaveTimeout);
            autoSaveTimeout = setTimeout(() => {
                performAutoSave();
            }, 3000);
        };
    }
}
function performAutoSave() {
    try {
        if (!hasMinimumRequiredFields()) {
            return;
        }
        const formData = getCurrentFormData();
        const lessonName = generateLessonName(formData);
        if (!lessonName) {
            return;
        }
        const saved = saveCurrentPlan(formData, true);
        if (saved) {
            showLessonNotification(`Auto-saved: ${lessonName}`, "success");
        } else {
            showLessonNotification("Auto-save failed", "warning");
        }
    } catch (error) {
        showLessonNotification("Auto-save failed", "error");
    }
}
function hasMinimumRequiredFields() {
    const requiredFields = ['subject', 'specificLesson'];
    for (let fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
            return false;
        }
    }
    return true;
}
function getCurrentFormData() {
    const form = document.getElementById('lessonPlanForm');
    const formData = {};
    if (!form) return formData;
    try {
        const elements = form.querySelectorAll('input, select, textarea');
        elements.forEach(element => {
            if (element.id || element.name) {
                const key = element.id || element.name;
                formData[key] = element.value || '';
            }
        });
    } catch (error) {
    }
    return formData;
}
function generateLessonName(formData) {
    try {
        const subject = (formData.subject || '').trim();
        const specificLesson = (formData.specificLesson || '').trim();
        const date = formData.date || new Date().toISOString().split('T')[0];
        if (!subject || !specificLesson) {
            return null;
        }
        return `${subject} - ${specificLesson} (${date})`;
    } catch (error) {
        return null;
    }
}
function loadDataIntoForm(data) {
    try {
        const form = document.getElementById('lessonPlanForm');
        if (!form || !data) return;
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key) || form.querySelector(`[name="${key}"]`);
            if (element && data[key] !== undefined) {
                element.value = data[key];
                element.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    } catch (error) {
    }
}
function loadDataIntoFormSilently(data) {
    try {
        const form = document.getElementById('lessonPlanForm');
        if (!form || !data) return;
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key) || form.querySelector(`[name="${key}"]`);
            if (element && data[key] !== undefined) {
                element.value = data[key];
            }
        });
    } catch (error) {
    }
}
function manualSaveLessonPlan() {
    if (!hasMinimumRequiredFields()) {
        showLessonNotification("Please fill in Subject and Specific Lesson fields first", "error");
        return false;
    }
    const formData = getCurrentFormData();
    const lessonName = generateLessonName(formData);
    const existingPlan = getCurrentSavedPlan();
    if (existingPlan && existingPlan.data) {
        showConfirmationModal({
            title: "Overwrite Saved Lesson Plan?",
            message: `A lesson plan "${existingPlan.name}" is already saved.\n\nDo you want to overwrite it with the current data?`,
            confirmText: "Overwrite & Save",
            confirmClass: "modal-btn-warning",
            onConfirm: () => {
                const saved = saveCurrentPlan(formData, false);
                if (saved) {
                    showLessonNotification(`Lesson plan saved: ${lessonName}`, "success");
                } else {
                    showLessonNotification("Failed to save lesson plan", "error");
                }
            }
        });
        return false;
    } else {
        const saved = saveCurrentPlan(formData, false);
        if (saved) {
            showLessonNotification(`Lesson plan saved: ${lessonName}`, "success");
        }
        return saved;
    }
}
function showLessonForm() {
    try {
        const form = document.getElementById('lessonPlanForm');
        if (form) {
            form.style.display = 'block';
        }
        const formContainers = document.querySelectorAll('.form-section, .input-group, .form-container, .lesson-form');
        formContainers.forEach(container => {
            container.style.display = 'block';
        });
    } catch (error) {
    }
}
function hideLessonForm() {
    try {
        const form = document.getElementById('lessonPlanForm');
        if (form) {
            form.style.display = 'none';
        }
        const formContainers = document.querySelectorAll('.form-section, .input-group, .form-container, .lesson-form');
        formContainers.forEach(container => {
            container.style.display = 'none';
        });
    } catch (error) {
    }
}
function showLessonTemplateWithDownload() {
    try {
        const lessonTemp = document.getElementById('lessonTemp');
        if (lessonTemp) {
            lessonTemp.style.display = 'block';
            lessonTemp.style.visibility = 'visible';
        }
        const lessonContent = document.querySelectorAll('.lesson-content, .lesson-template');
        lessonContent.forEach(content => {
            content.style.display = 'block';
            content.style.visibility = 'visible';
        });
        let downloadBtn = document.getElementById('downloadPdfBtn');
        if (!downloadBtn) {
            addDownloadButton();
        } else {
            downloadBtn.style.display = 'block';
        }
    } catch (error) {
    }
}
function hideLessonTemplate() {
    try {
        const lessonTemp = document.getElementById('lessonTemp');
        if (lessonTemp) {
            lessonTemp.style.display = 'none';
        }
        const lessonContent = document.querySelectorAll('.lesson-content, .lesson-template');
        lessonContent.forEach(content => {
            content.style.display = 'none';
        });
    } catch (error) {
    }
}
function addDownloadButton() {
    try {
        const container = document.querySelector('.container');
        const existingBtnContainer = document.querySelector('.button-container');
        if (existingBtnContainer) {
            const downloadBtn = document.createElement('button');
            downloadBtn.id = 'downloadPdfBtn';
            downloadBtn.className = 'action-button primary-btn';
            downloadBtn.innerHTML = '<i class="bi bi-download"></i> Download PDF';
            downloadBtn.onclick = downloadDocument;
            existingBtnContainer.appendChild(downloadBtn);
        } else {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            buttonContainer.innerHTML = `
                <button id="downloadPdfBtn" class="action-button primary-btn" onclick="downloadDocument()">
                    <i class="bi bi-download"></i> Download PDF
                </button>
            `;
            const lessonTemp = document.getElementById('lessonTemp');
            if (lessonTemp) {
                lessonTemp.insertAdjacentElement('afterend', buttonContainer);
            } else if (container) {
                container.appendChild(buttonContainer);
            }
        }
    } catch (error) {
    }
}
function showEditingBanner(lessonName) {
    try {
        let banner = document.querySelector('.editing-banner');
        if (!banner) {
            banner = document.createElement('div');
            banner.className = 'editing-banner';
            const form = document.getElementById('lessonPlanForm');
            if (form) {
                form.insertBefore(banner, form.firstChild);
            }
        }
        banner.innerHTML = `
            <div class="banner-content">
                <span><i class="bi bi-pencil-square"></i> Currently editing: <strong>${lessonName}</strong></span>
                <button onclick="hideEditingBanner()" class="banner-close">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `;
        banner.style.display = 'block';
    } catch (error) {
    }
}
function hideEditingBanner() {
    const banner = document.querySelector('.editing-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

function createNewLessonPlan() {
    try {
        const existingPlan = getCurrentSavedPlan();
        if (existingPlan) {
            const existingName = existingPlan.name || 'mpango wako wa somo';
            showConfirmationModal({
                title: '<i class="bi bi-exclamation-triangle-fill"></i> Anza Mpango Mpya wa Somo?',
                message: `Una mpango wa somo uliohifadhiwa:\n"${existingName}"\n\nKuunda mpango mpya wa somo kutafuta data hii KABISA na utapelekwa Hatua ya 1 kuanza upya.\n\nHatua hii haiwezi kutendwa tena. Je, una uhakika?`,
                confirmText: "Ndio, Futa & Anza Upya",
                confirmClass: "modal-btn-danger",
                onConfirm: () => {
                    clearCurrentSavedPlan();
                    location.reload();
                }
            });
        } else {
            location.reload();
        }
    } catch (error) {
        showLessonNotification("Hitilafu wakati wa kuanza mpango mpya", "error");
    }
}
function showConfirmationModal({ title, message, confirmText, confirmClass, onConfirm, onCancel }) {
    const modalHTML = `
        <div id="confirmationModal" class="folder-modal-overlay">
            <div class="confirmation-modal">
                <div class="confirmation-header">
                    <h3>${title}</h3>
                </div>
                <div class="confirmation-body">
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="confirmation-footer">
                    <button class="modal-btn modal-btn-secondary" onclick="closeConfirmationModal()">
                        <i class="bi bi-x-circle"></i> Cancel
                    </button>
                    <button class="modal-btn ${confirmClass}" onclick="handleConfirmation()">
                        <i class="bi bi-check-circle"></i> ${confirmText}
                    </button>
                </div>
            </div>
        </div>
    `;
    const existingModal = document.getElementById('confirmationModal');
    if (existingModal) {
        existingModal.remove();
    }
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    window.currentConfirmation = { onConfirm, onCancel };
    document.body.style.overflow = 'hidden';
}
function handleConfirmation() {
    if (window.currentConfirmation && window.currentConfirmation.onConfirm) {
        window.currentConfirmation.onConfirm();
    }
    closeConfirmationModal();
}
function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
        modal.remove();
    }
    if (window.currentConfirmation && window.currentConfirmation.onCancel) {
        window.currentConfirmation.onCancel();
    }
    window.currentConfirmation = null;
    document.body.style.overflow = 'auto';
}
function showDownloadSuccessToast(fileName) {
    const existing = document.getElementById('dlSuccessToast');
    if (existing) existing.remove();
    if (window._dlToastTimer) clearInterval(window._dlToastTimer);

    const DURATION = 20;
    addDownloadToastStyles();

    const toast = document.createElement('div');
    toast.id = 'dlSuccessToast';
    toast.innerHTML = `
        <div class="dst-glow-ring"></div>
        <div class="dst-body">
            <div class="dst-anim-wrap">
                <div class="dst-circle-outer">
                    <div class="dst-circle-inner">
                        <i class="bi bi-file-earmark-check-fill dst-file-icon"></i>
                    </div>
                    <svg class="dst-progress-ring" viewBox="0 0 80 80">
                        <circle class="dst-ring-bg"   cx="40" cy="40" r="35"/>
                        <circle class="dst-ring-fill" cx="40" cy="40" r="35" id="dlRingFill"/>
                    </svg>
                </div>
                <div class="dst-sparkles" aria-hidden="true">
                    <span class="dst-sp sp1"><i class="bi bi-stars"></i></span>
                    <span class="dst-sp sp2"><i class="bi bi-star-fill"></i></span>
                    <span class="dst-sp sp3"><i class="bi bi-stars"></i></span>
                    <span class="dst-sp sp4"><i class="bi bi-star-fill"></i></span>
                    <span class="dst-sp sp5"><i class="bi bi-stars"></i></span>
                </div>
            </div>
            <div class="dst-text">
                <div class="dst-title"><i class="bi bi-check-circle-fill"></i> PDF Downloaded!</div>
                <div class="dst-filename">${fileName || 'Your lesson plan'}.pdf</div>
                <div class="dst-msg">Your file has been saved to your downloads folder. Check it to confirm the download completed properly.</div>
                <div class="dst-countdown-row">
                    <div class="dst-countdown-bar-wrap"><div class="dst-countdown-bar" id="dlCountBar"></div></div>
                    <span class="dst-countdown-num" id="dlCountNum">${DURATION}s</span>
                </div>
            </div>
            <button class="dst-close" id="dlToastClose" title="Dismiss">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    `;
    document.body.appendChild(toast);

    const ring = document.getElementById('dlRingFill');
    const bar  = document.getElementById('dlCountBar');
    const num  = document.getElementById('dlCountNum');
    const closeBtn = document.getElementById('dlToastClose');

    const circumference = 2 * Math.PI * 35;
    ring.style.strokeDasharray  = circumference;
    ring.style.strokeDashoffset = circumference;

    let elapsed = 0;
    const tick = 100;
    const steps = (DURATION * 1000) / tick;

    window._dlToastTimer = setInterval(() => {
        elapsed++;
        const progress = elapsed / steps;
        ring.style.strokeDashoffset = circumference * (1 - progress);
        bar.style.width = (progress * 100) + '%';
        const remaining = Math.ceil(DURATION - (elapsed * tick / 1000));
        num.textContent = remaining + 's';
        if (elapsed >= steps) {
            clearInterval(window._dlToastTimer);
            toast.classList.add('dst-hide');
            setTimeout(() => toast.remove(), 400);
        }
    }, tick);

    function dismiss() {
        clearInterval(window._dlToastTimer);
        toast.classList.add('dst-hide');
        setTimeout(() => toast.remove(), 400);
    }
    closeBtn.addEventListener('click', dismiss);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('dst-show'));
    });
}

function addDownloadToastStyles() {
    if (document.querySelector('#dlToastStyles')) return;
    const s = document.createElement('style');
    s.id = 'dlToastStyles';
    s.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

        #dlSuccessToast {
            position: fixed;
            bottom: 28px;
            right: 28px;
            z-index: 99998;
            max-width: 400px;
            width: calc(100vw - 32px);
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
            pointer-events: none;
        }
        #dlSuccessToast.dst-show {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
        }
        #dlSuccessToast.dst-hide {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }

        .dst-glow-ring {
            position: absolute;
            inset: -6px;
            background: linear-gradient(135deg, #42b72a 0%, #1877f2 50%, #42b72a 100%);
            background-size: 200% 200%;
            animation: dst-glow-spin 3s linear infinite;
            z-index: 0;
        }
        @keyframes dst-glow-spin {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .dst-body {
            position: relative;
            z-index: 1;
            background: #0d1b2a;
            color: white;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 20px 18px 18px;
        }

        .dst-anim-wrap {
            position: relative;
            flex-shrink: 0;
        }

        .dst-circle-outer {
            position: relative;
            width: 80px;
            height: 80px;
        }

        .dst-circle-inner {
            position: absolute;
            inset: 10px;
            background: #42b72a;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: dst-pop 0.45s 0.15s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes dst-pop {
            0%   { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        .dst-file-icon {
            font-size: 1.6rem;
            color: white;
            animation: dst-icon-in 0.4s 0.5s ease both;
        }
        @keyframes dst-icon-in {
            0%   { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
        }

        .dst-progress-ring {
            position: absolute;
            inset: 0;
            width: 80px;
            height: 80px;
            transform: rotate(-90deg);
        }
        .dst-ring-bg {
            fill: none;
            stroke: rgba(255,255,255,0.1);
            stroke-width: 4;
        }
        .dst-ring-fill {
            fill: none;
            stroke: #42b72a;
            stroke-width: 4;
            stroke-linecap: butt;
            transition: stroke-dashoffset 0.12s linear;
        }

        .dst-sparkles {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }
        .dst-sp {
            position: absolute;
            font-size: 0.75rem;
            color: rgba(255,255,255,0.7);
            animation: dst-sp-float 2.4s ease-in-out infinite;
        }
        .sp1 { top: -4px; left: 50%; animation-delay: 0.0s; }
        .sp2 { top: 20%;  left: -6px; animation-delay: 0.4s; }
        .sp3 { top: 20%;  right: -6px; animation-delay: 0.8s; }
        .sp4 { bottom: -4px; left: 28%; animation-delay: 1.2s; }
        .sp5 { bottom: 10%;  right: -4px; animation-delay: 1.6s; }
        @keyframes dst-sp-float {
            0%, 100% { transform: translateY(0) scale(1);   opacity: 0.7; }
            50%       { transform: translateY(-7px) scale(1.3); opacity: 1; }
        }

        .dst-text { flex: 1; min-width: 0; }

        .dst-title {
            font-size: 1rem;
            font-weight: 800;
            color: #42b72a;
            display: flex;
            align-items: center;
            gap: 7px;
            margin-bottom: 4px;
            animation: dst-fade-up 0.4s 0.3s both;
        }
        .dst-title i { font-size: 1rem; }

        .dst-filename {
            font-size: 0.78rem;
            color: rgba(255,255,255,0.55);
            font-weight: 500;
            margin-bottom: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            animation: dst-fade-up 0.4s 0.4s both;
        }

        .dst-msg {
            font-size: 0.875rem;
            color: rgba(255,255,255,0.82);
            line-height: 1.55;
            margin-bottom: 12px;
            animation: dst-fade-up 0.4s 0.5s both;
        }

        @keyframes dst-fade-up {
            0%   { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        .dst-countdown-row {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .dst-countdown-bar-wrap {
            flex: 1;
            height: 4px;
            background: rgba(255,255,255,0.12);
            overflow: hidden;
        }
        .dst-countdown-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #1877f2, #42b72a);
            transition: width 0.12s linear;
        }
        .dst-countdown-num {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.5);
            font-weight: 700;
            min-width: 26px;
            text-align: right;
        }

        .dst-close {
            background: rgba(255,255,255,0.08);
            border: none;
            color: rgba(255,255,255,0.6);
            cursor: pointer;
            padding: 6px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            flex-shrink: 0;
            margin-top: -2px;
            transition: background 0.15s ease, color 0.15s ease;
        }
        .dst-close:hover { background: rgba(255,255,255,0.16); color: white; }

        @media (max-width: 480px) {
            #dlSuccessToast { bottom: 12px; right: 12px; width: calc(100vw - 24px); }
            .dst-body { padding: 16px 14px 14px; gap: 12px; }
            .dst-circle-outer { width: 64px; height: 64px; }
            .dst-progress-ring { width: 64px; height: 64px; }
            .dst-file-icon { font-size: 1.2rem; }
            .dst-title { font-size: 0.9rem; }
            .dst-msg { font-size: 0.8125rem; }
            .dst-sparkles { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
            .dst-glow-ring,
            .dst-circle-inner,
            .dst-file-icon,
            .dst-sp,
            .dst-title,
            .dst-filename,
            .dst-msg { animation: none; }
            #dlSuccessToast { transition: none; }
        }
    `;
    document.head.appendChild(s);
}

function showLessonNotification(message, type = "info", duration = 4000) {
    try {
        document.querySelectorAll('.lesson-notification').forEach(n => n.remove());
        const notification = document.createElement('div');
        notification.className = `lesson-notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, duration);
    } catch (error) {
    }
}
function getNotificationIcon(type) {
    const icons = {
        success: '<i class="bi bi-check-circle-fill"></i>',
        error: '<i class="bi bi-x-circle-fill"></i>', 
        warning: '<i class="bi bi-exclamation-triangle-fill"></i>',
        info: '<i class="bi bi-info-circle-fill"></i>'
    };
    return icons[type] || icons.info;
}
function addEssentialStyles() {
    if (document.querySelector('#essentialLessonStyles')) return;
    const style = document.createElement('style');
    style.id = 'essentialLessonStyles';
    style.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
        
        .folder-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.2s ease-out;
        }
        .confirmation-modal {
            background: white;
            width: 90%;
            max-width: 480px;
            overflow: hidden;
            animation: modalScaleIn 0.3s ease-out;
        }
        .confirmation-header {
            padding: 20px 24px 16px;
            border-bottom: 1px solid #e4e6eb;
        }
        .confirmation-header h3 {
            margin: 0;
            color: #050505;
            font-size: 1.25rem;
            font-weight: 600;
        }
        .confirmation-body {
            padding: 16px 24px;
            color: #1c1e21;
            line-height: 1.6;
        }
        .confirmation-footer {
            padding: 16px 24px 20px;
            border-top: 1px solid #e4e6eb;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: background 0.2s ease;
            min-width: 90px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .modal-btn-primary   { background: #1877f2; color: white; }
        .modal-btn-primary:hover { background: #166fe5; }
        .modal-btn-secondary { background: #e4e6eb; color: #050505; border: 1px solid #ccd0d5; }
        .modal-btn-secondary:hover { background: #d8dadf; }
        .modal-btn-danger    { background: #e4405f; color: white; }
        .modal-btn-danger:hover { background: #d02d4f; }
        .modal-btn-warning   { background: #f7b928; color: white; }
        .modal-btn-warning:hover { background: #e6a817; }
        
        .lesson-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10001;
            min-width: 320px;
            padding: 14px 18px;
            animation: slideInRight 0.3s ease-out;
            font-weight: 500;
            font-size: 0.9375rem;
        }
        .notification-success { background: #42b72a; color: white; }
        .notification-error   { background: #e4405f; color: white; }
        .notification-warning { background: #f7b928; color: white; }
        .notification-info    { background: #1877f2; color: white; }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .notification-icon {
            font-size: 1.125rem;
            display: flex;
            align-items: center;
        }
        .notification-message { flex: 1; }
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.125rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .notification-close:hover { background: rgba(255,255,255,0.2); }
        
        .editing-banner {
            background: #f7b928;
            color: white;
            padding: 14px 18px;
            margin-bottom: 16px;
            display: none;
        }
        .banner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .banner-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.25rem;
            cursor: pointer;
            padding: 0;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .banner-close:hover { background: rgba(255,255,255,0.2); }
        
        .save-lesson-btn {
            background: #42b72a;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: background 0.2s ease;
            margin: 10px 5px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .save-lesson-btn:hover { background: #36a420; }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @keyframes modalScaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1);   }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(80px); }
            to   { opacity: 1; transform: translateX(0);    }
        }
        
        @media (max-width: 768px) {
            .lesson-notification {
                right: 10px;
                left: 10px;
                min-width: auto;
            }
            .confirmation-modal { width: 95%; }
            .confirmation-footer {
                flex-direction: column;
            }
            .modal-btn { width: 100%; justify-content: center; }
        }
        @media (max-width: 480px) {
            .confirmation-header { padding: 16px; }
            .confirmation-body   { padding: 14px 16px; }
            .confirmation-footer { padding: 14px 16px; }
        }
    `;
    document.head.appendChild(style);
}
function enhanceExistingFormSubmission() {
    try {
        const submitBtn = document.getElementById('submit-lesson-plan') || 
                         document.querySelector('button[type="submit"]') ||
                         document.querySelector('.submit-btn');
        if (submitBtn && !submitBtn.dataset.enhanced) {
            submitBtn.dataset.enhanced = 'true';
            const originalHandler = submitBtn.onclick;
            submitBtn.onclick = function(e) {
                e.preventDefault();
                const saved = manualSaveLessonPlan();
                if (saved && originalHandler) {
                    originalHandler.call(this, e);
                } else if (saved && typeof updateContent === 'function') {
                    updateContent();
                }
            };
        }
    } catch (error) {
    }
}
function initializeLessonPlanFolderSystem() {
    try {
        addEssentialStyles();
        setupAutoSaveSystem();
        enhanceExistingFormSubmission();
        if (typeof(Storage) !== "undefined") {
            const existingPlan = getCurrentSavedPlan();
            if (existingPlan && existingPlan.name) {
                showLessonNotification(`Restored: "${existingPlan.name}" — Auto-save is ON`, "success");
            } else {
                showLessonNotification("Auto-save is ON — your lesson plan will be saved automatically", "success");
            }
        } else {
            showLessonNotification("Browser storage not supported — lesson plan won't be saved after closing", "warning");
        }
    } catch (error) {
        showLessonNotification("Failed to initialise save system", "error");
    }
}
function addPdfLoaderStyles() {
    if (document.querySelector('#pdfLoaderStyles')) return;
    const style = document.createElement('style');
    style.id = 'pdfLoaderStyles';
    style.textContent = `
        .pdf-loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            animation: fadeIn 0.2s ease;
        }
        .pdf-loader-content {
            background: white;
            padding: 40px;
            text-align: center;
            max-width: 400px;
            width: 90%;
        }
        .pdf-loader-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid #e4e6eb;
            border-top: 4px solid #1877f2;
            margin: 0 auto 24px;
            animation: spin 0.8s linear infinite;
        }
        .pdf-loader-content h3 {
            margin: 0 0 12px 0;
            color: #050505;
            font-size: 1.25rem;
            font-weight: 600;
        }
        .pdf-loader-content p {
            margin: 0;
            color: #65676b;
            font-size: 0.9375rem;
            line-height: 1.5;
        }
        @keyframes spin {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}
function showPdfLoader() {
    addPdfLoaderStyles();
    const loaderHTML = `
        <div id="pdfLoader" class="pdf-loader-overlay">
            <div class="pdf-loader-content">
                <div class="pdf-loader-spinner"></div>
                <h3><i class="bi bi-file-earmark-pdf"></i> Generating PDF</h3>
                <p>Please wait while we prepare your lesson plan for download...</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loaderHTML);
    document.body.style.overflow = 'hidden';
}
function hidePdfLoader() {
    const loader = document.getElementById('pdfLoader');
    if (loader) {
        loader.remove();
    }
    document.body.style.overflow = 'auto';
}
function showPdfLoaderWithProgress() {
    addPdfLoaderStyles();
    const loaderHTML = `
        <div id="pdfLoader" class="pdf-loader-overlay">
            <div class="pdf-loader-content">
                <div class="pdf-loader-spinner"></div>
                <h3><i class="bi bi-file-earmark-pdf"></i> Generating PDF</h3>
                <p id="pdfLoaderStatus">Preparing your lesson plan...</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loaderHTML);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const status = document.getElementById('pdfLoaderStatus');
        if (status) status.textContent = 'Processing content...';
    }, 500);
    setTimeout(() => {
        const status = document.getElementById('pdfLoaderStatus');
        if (status) status.textContent = 'Finalizing PDF...';
    }, 1500);
}
function recordLessonPlanToTracker() {
    try {
        const subject = document.getElementById('subject')?.value || '';
        const classes = document.getElementById('classes')?.value || '';
        const streams = document.getElementById('streams')?.value || '';
        const specificLesson = document.getElementById('specificLesson')?.value || '';
        const teacherName = document.getElementById('teacherName')?.value || '';
        const school = document.getElementById('school')?.value || '';
        const dateVal = document.getElementById('date')?.value || new Date().toISOString().split('T')[0];
        if (!subject || !classes || !specificLesson) return;
        const record = {
            id: generateUniqueId(),
            subject: subject,
            classes: classes,
            streams: streams,
            specificLesson: specificLesson,
            teacherName: teacherName,
            school: school,
            date: dateVal,
            timestamp: new Date().toISOString()
        };
        const existing = getTrackerData();
        existing.push(record);
        localStorage.setItem('lessonPlanTracker', JSON.stringify(existing));
    } catch (e) {}
}
function getTrackerData() {
    try {
        const stored = localStorage.getItem('lessonPlanTracker');
        return stored ? JSON.parse(stored) : [];
    } catch (e) { return []; }
}
function showTrackerModal() {
    const existing = document.getElementById('trackerModal');
    if (existing) existing.remove();
    const records = getTrackerData();
    const total = records.length;
    const grouped = {};
    records.forEach(r => {
        const key = r.classes || 'Haijulikani';
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(r);
    });
    let bodyHTML = '';
    if (total === 0) {
        bodyHTML = '<div class="tracker-empty"><i class="bi bi-journal-x"></i><p>Hakuna mipango ya masomo iliyorekodiwa bado.</p></div>';
    } else {
        Object.keys(grouped).sort().forEach(cls => {
            const plans = grouped[cls];
            const subjectSet = [...new Set(plans.map(p => p.subject))];
            bodyHTML += `
                <div class="tracker-class-group">
                    <div class="tracker-class-header">
                        <span class="tracker-class-icon"><i class="bi bi-building"></i></span>
                        <span class="tracker-class-name">Darasa: <strong>${cls}</strong></span>
                        <span class="tracker-class-badge">${plans.length} mpango${plans.length > 1 ? '' : ''}</span>
                    </div>
                    <div class="tracker-subject-tags">
                        ${subjectSet.map(s => `<span class="tracker-subject-tag"><i class="bi bi-book"></i> ${s}</span>`).join('')}
                    </div>
                    <div class="tracker-plans-list">
                        ${plans.map((p, i) => `
                            <div class="tracker-plan-row">
                                <span class="tracker-plan-num">${i + 1}</span>
                                <div class="tracker-plan-info">
                                    <strong>${p.specificLesson}</strong>
                                    <small><i class="bi bi-journal-text"></i> ${p.subject} &nbsp;|&nbsp; <i class="bi bi-calendar3"></i> ${p.date}${p.streams ? ' &nbsp;|&nbsp; <i class="bi bi-people"></i> ' + p.streams : ''}</small>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
    }
    const subjectSummary = [...new Set(records.map(r => r.subject))];
    const classSummary = [...new Set(records.map(r => r.classes))];
    const modalHTML = `
        <div id="trackerModal" class="tracker-modal-overlay">
            <div class="tracker-modal">
                <div class="tracker-modal-header">
                    <div class="tracker-header-title">
                        <i class="bi bi-bar-chart-line-fill"></i>
                        <h2>Summary</h2>
                    </div>
                    <button class="tracker-close-btn" onclick="document.getElementById('trackerModal').remove(); document.body.style.overflow='auto';">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div class="tracker-stats-bar">
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${total}</span>
                        <span class="tracker-stat-label">Jumla ya Mipango</span>
                    </div>
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${classSummary.length}</span>
                        <span class="tracker-stat-label">Madarasa</span>
                    </div>
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${subjectSummary.length}</span>
                        <span class="tracker-stat-label">Masomo</span>
                    </div>
                </div>
                <div class="tracker-modal-body">
                    ${bodyHTML}
                </div>
                <div class="tracker-modal-footer">
                    <button class="modal-btn modal-btn-danger" onclick="clearTrackerData()">
                        <i class="bi bi-trash3"></i> Futa Historia Yote
                    </button>
                    <button class="modal-btn modal-btn-secondary" onclick="document.getElementById('trackerModal').remove(); document.body.style.overflow='auto';">
                        <i class="bi bi-x-circle"></i> Funga
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    addTrackerStyles();
}
function clearTrackerData() {
    showConfirmationModal({
        title: "Futa Historia Yote?",
        message: "Una uhakika unataka kufuta rekodi zote za ufuatiliaji?\n\nHatua hii haiwezi kutendwa tena.",
        confirmText: "Ndio, Futa Yote",
        confirmClass: "modal-btn-danger",
        onConfirm: function() {
            localStorage.removeItem('lessonPlanTracker');
            document.getElementById('trackerModal')?.remove();
            document.body.style.overflow = 'auto';
            showLessonNotification("Historia ya ufuatiliaji imefutwa.", "success");
        }
    });
}
function addTrackerStyles() {
    if (document.querySelector('#trackerModalStyles')) return;
    const s = document.createElement('style');
    s.id = 'trackerModalStyles';
    s.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
        .tracker-modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.55); display: flex; justify-content: center;
            align-items: center; z-index: 10050; animation: fadeIn 0.2s ease;
        }
        .tracker-modal {
            background: white; width: 95%; max-width: 820px; max-height: 88vh;
            display: flex; flex-direction: column; overflow: hidden;
            animation: modalSlideIn 0.3s ease-out;
        }
        .tracker-modal-header {
            background: #1877f2; color: white; padding: 16px 24px;
            display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;
        }
        .tracker-header-title { display: flex; align-items: center; gap: 12px; }
        .tracker-header-title i { font-size: 1.5rem; }
        .tracker-header-title h2 { margin: 0; font-size: 1.2rem; font-weight: 700; }
        .tracker-close-btn {
            background: rgba(255,255,255,0.15); border: none; color: white;
            width: 36px; height: 36px; cursor: pointer; font-size: 1.125rem;
            display: flex; align-items: center; justify-content: center;
        }
        .tracker-close-btn:hover { background: rgba(255,255,255,0.25); }
        .tracker-stats-bar {
            background: #f0f2f5; padding: 16px 24px;
            display: flex; gap: 0; flex-shrink: 0; border-bottom: 1px solid #e4e6eb;
        }
        .tracker-stat {
            flex: 1; text-align: center; padding: 10px 8px;
            border-right: 1px solid #d8dadf;
        }
        .tracker-stat:last-child { border-right: none; }
        .tracker-stat-num { display: block; font-size: 2rem; font-weight: 800; color: #1877f2; }
        .tracker-stat-label { display: block; font-size: 0.8125rem; color: #65676b; margin-top: 2px; font-weight: 500; }
        .tracker-modal-body {
            flex: 1; overflow-y: auto; padding: 20px 24px; background: #f7f8fa;
        }
        .tracker-modal-body::-webkit-scrollbar { width: 6px; }
        .tracker-modal-body::-webkit-scrollbar-thumb { background: #bcc0c4; }
        .tracker-empty {
            text-align: center; padding: 60px 20px; color: #65676b;
        }
        .tracker-empty i { font-size: 3.5rem; opacity: 0.4; display: block; margin-bottom: 16px; }
        .tracker-class-group {
            background: white; border: 1px solid #e4e6eb;
            margin-bottom: 16px; overflow: hidden;
        }
        .tracker-class-header {
            background: #1877f2; color: white; padding: 12px 18px;
            display: flex; align-items: center; gap: 10px;
        }
        .tracker-class-icon { font-size: 1.125rem; }
        .tracker-class-name { flex: 1; font-size: 1rem; }
        .tracker-class-badge {
            background: rgba(255,255,255,0.25); padding: 3px 10px;
            font-size: 0.8125rem; font-weight: 600;
        }
        .tracker-subject-tags {
            padding: 10px 18px; background: #eef2fb;
            display: flex; flex-wrap: wrap; gap: 8px; border-bottom: 1px solid #e4e6eb;
        }
        .tracker-subject-tag {
            background: #1877f2; color: white; padding: 4px 12px;
            font-size: 0.8125rem; font-weight: 600; display: inline-flex; align-items: center; gap: 5px;
        }
        .tracker-plans-list { padding: 8px 0; }
        .tracker-plan-row {
            display: flex; align-items: flex-start; gap: 12px;
            padding: 10px 18px; border-bottom: 1px solid #f0f2f5;
        }
        .tracker-plan-row:last-child { border-bottom: none; }
        .tracker-plan-num {
            background: #e4e6eb; color: #050505; font-weight: 700;
            width: 26px; height: 26px; display: flex; align-items: center;
            justify-content: center; font-size: 0.8125rem; flex-shrink: 0; margin-top: 2px;
        }
        .tracker-plan-info { flex: 1; }
        .tracker-plan-info strong { display: block; color: #050505; font-size: 0.9375rem; margin-bottom: 3px; }
        .tracker-plan-info small { color: #65676b; font-size: 0.8125rem; }
        .tracker-modal-footer {
            padding: 14px 24px; border-top: 1px solid #e4e6eb; background: white;
            display: flex; justify-content: flex-end; gap: 10px; flex-shrink: 0;
        }
        @media (max-width: 600px) {
            .tracker-modal { width: 100%; max-height: 100vh; }
            .tracker-modal-header { padding: 14px 16px; }
            .tracker-header-title h2 { font-size: 1rem; }
            .tracker-modal-body { padding: 14px 12px; }
            .tracker-stats-bar { padding: 12px 16px; }
            .tracker-stat-num { font-size: 1.5rem; }
            .tracker-modal-footer { flex-direction: column; }
            .tracker-modal-footer .modal-btn { width: 100%; justify-content: center; }
        }
    `;
    document.head.appendChild(s);
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLessonPlanFolderSystem);
} else {
    initializeLessonPlanFolderSystem();
}
