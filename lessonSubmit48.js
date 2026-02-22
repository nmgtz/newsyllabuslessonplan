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
            <p class="smc-sub">Your lesson plan is <strong>ready to use</strong>. Use the buttons below to <strong>Download PDF</strong>, view your <strong>Summary</strong>, or <strong>Create a New Plan</strong>.</p>
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
            opacity: 0.06;
            background: white;
            transform: skewX(-18deg);
        }
        .s1 { left: -6%;  }
        .s2 { left: 18%;  }
        .s3 { left: 52%;  }
        .s4 { left: 76%;  }

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
        .smc-ring { display: none; }
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
        .smc-stars { display: none; }

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
            color: #d6e8ff;
            font-weight: 500;
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
    const existingModal = document.querySelector('.document-name-modal-overlay');
    if (existingModal) existingModal.remove();

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'document-name-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="dnm-modal">

            <div class="dnm-scan-line"></div>

            <div class="dnm-particles" aria-hidden="true">
                <span class="dnm-p dp1"></span><span class="dnm-p dp2"></span>
                <span class="dnm-p dp3"></span><span class="dnm-p dp4"></span>
                <span class="dnm-p dp5"></span><span class="dnm-p dp6"></span>
            </div>

            <div class="dnm-header">
                <div class="dnm-header-icon-wrap">
                    <div class="dnm-header-ring r1"></div>
                    <div class="dnm-header-ring r2"></div>
                    <div class="dnm-header-icon-box">
                        <i class="bi bi-pencil-fill"></i>
                    </div>
                </div>
                <div class="dnm-header-text">
                    <div class="dnm-header-badge"><i class="bi bi-file-earmark-pdf-fill"></i> PDF Title</div>
                    <h3>Name Your Lesson Plan</h3>
                    <p>This name will be used as the file name when saving your PDF.</p>
                </div>
                <button class="dnm-close-btn" onclick="closeDocumentNameModal()" title="Cancel">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>

            <div class="dnm-body">
                <div class="dnm-wave-row" aria-hidden="true">
                    <span class="dnm-wbar w1"></span><span class="dnm-wbar w2"></span>
                    <span class="dnm-wbar w3"></span><span class="dnm-wbar w4"></span>
                    <span class="dnm-wbar w5"></span><span class="dnm-wbar w6"></span>
                    <span class="dnm-wbar w7"></span><span class="dnm-wbar w8"></span>
                    <span class="dnm-wbar w9"></span><span class="dnm-wbar w10"></span>
                </div>

                <label class="dnm-label" for="documentNameInput">
                    <i class="bi bi-tag-fill"></i> Enter lesson plan title
                </label>
                <div class="dnm-input-wrap">
                    <div class="dnm-input-prefix"><i class="bi bi-file-earmark-text"></i></div>
                    <input
                        type="text"
                        id="documentNameInput"
                        class="document-name-input"
                        value="${defaultName}"
                        placeholder="e.g. English Reading Activity Class 4"
                        autocomplete="off"
                    >
                    <div class="dnm-input-focus-bar"></div>
                </div>
                <div class="dnm-hint">
                    <i class="bi bi-info-circle"></i>
                    Spaces will become underscores in the file name &nbsp;·&nbsp; Press <kbd>Enter</kbd> to confirm
                </div>
            </div>

            <div class="dnm-footer">
                <button class="dnm-btn dnm-cancel" onclick="closeDocumentNameModal()">
                    <i class="bi bi-x-circle"></i> Cancel
                </button>
                <button class="dnm-btn dnm-confirm" onclick="confirmDocumentName()">
                    <i class="bi bi-download"></i> Save &amp; Download
                </button>
            </div>

        </div>
    `;

    document.body.appendChild(modalOverlay);
    addDocumentNameModalStyles();

    setTimeout(() => {
        const input = document.getElementById('documentNameInput');
        if (input) { input.focus(); input.select(); }
        modalOverlay.querySelector('.dnm-modal').classList.add('dnm-modal-show');
    }, 30);

    window.documentNameCallback = callback;

    document.getElementById('documentNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') confirmDocumentName();
    });
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeDocumentNameModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
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
        const inner = modal.querySelector('.dnm-modal');
        if (inner) inner.classList.add('dnm-modal-hide');
        setTimeout(() => modal.remove(), 350);
    }
    window.documentNameCallback = null;
}
function addDocumentNameModalStyles() {
    if (document.querySelector('#documentNameModalStyles')) return;
    const style = document.createElement('style');
    style.id = 'documentNameModalStyles';
    style.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

        /* ── Overlay ── */
        .document-name-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.55);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10050;
            backdrop-filter: blur(3px);
            animation: dnm-overlay-in 0.25s ease both;
        }
        @keyframes dnm-overlay-in {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* ── Modal card ── */
        .dnm-modal {
            position: relative;
            background: #ffffff;
            width: 94%;
            max-width: 500px;
            overflow: hidden;
            opacity: 0;
            transform: translateY(40px) scale(0.94);
            transition: opacity 0.38s cubic-bezier(0.22,1,0.36,1),
                        transform 0.38s cubic-bezier(0.22,1,0.36,1);
            box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
        .dnm-modal.dnm-modal-show {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .dnm-modal.dnm-modal-hide {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
        }

        /* Solid blue top border */
        .dnm-modal::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 4px;
            background: #1877f2;
        }

        /* Scan line and particles removed */
        .dnm-scan-line { display: none; }
        .dnm-particles { display: none; }

        /* ── Header ── */
        .dnm-header {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 24px 20px 18px;
            border-bottom: 1px solid #e4e6eb;
            position: relative;
            z-index: 2;
            background: #fff;
        }

        /* Rings removed — static icon only */
        .dnm-header-ring { display: none; }

        .dnm-header-icon-wrap {
            position: relative;
            width: 52px;
            height: 52px;
            flex-shrink: 0;
        }

        /* Waveform removed */
        .dnm-wave-row { display: none; }
        .dnm-header-icon-box {
            position: absolute;
            inset: 8px;
            background: #1877f2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.1rem;
            animation: dnm-icon-pop 0.5s 0.2s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes dnm-icon-pop {
            0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
            100% { transform: scale(1) rotate(0deg);   opacity: 1; }
        }

        /* Header text */
        .dnm-header-text { flex: 1; min-width: 0; }
        .dnm-header-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #e7f0fd;
            border: 1px solid #b3cdfa;
            color: #1877f2;
            font-size: 0.68rem;
            font-weight: 700;
            padding: 2px 9px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 6px;
        }
        .dnm-header-text h3 {
            margin: 0 0 4px;
            color: #050505;
            font-size: 1.1rem;
            font-weight: 800;
        }
        .dnm-header-text p {
            margin: 0;
            font-size: 0.8rem;
            color: #65676b;
            line-height: 1.5;
        }
        .dnm-label {
            display: flex;
            align-items: center;
            gap: 7px;
            color: #1877f2;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 10px;
        }
        .dnm-hint {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 10px;
            font-size: 0.77rem;
            color: #8a8d91;
            line-height: 1.5;
        }
        .dnm-footer {
            display: flex;
            gap: 0;
            border-top: 1px solid #e4e6eb;
            background: #fff;
        }

        /* Close button */
        .dnm-close-btn {
            background: #f0f2f5;
            border: 1px solid #e4e6eb;
            color: #65676b;
            width: 30px; height: 30px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            font-size: 0.8rem;
            flex-shrink: 0;
        }

        /* ── Body ── */
        .dnm-body {
            padding: 20px;
            position: relative;
            z-index: 2;
            background: #f7f8fa;
        }

        /* Mini waveform */
        .dnm-wave-row {
            display: flex;
            align-items: center;
            gap: 3px;
            height: 16px;
            margin-bottom: 16px;
            animation: dnm-fade-up 0.4s 0.45s both;
        }
        .dnm-wbar {
            display: block;
            width: 3px;
            animation: dnm-wave-anim 1.1s ease-in-out infinite;
        }
        .w1  { height: 4px;  background: #42b72a; animation-delay: 0.0s; }
        .w2  { height: 10px; background: #42b72a; animation-delay: 0.1s; }
        .w3  { height: 16px; background: #1877f2; animation-delay: 0.2s; }
        .w4  { height: 8px;  background: #1877f2; animation-delay: 0.3s; }
        .w5  { height: 14px; background: #1877f2; animation-delay: 0.4s; }
        .w6  { height: 16px; background: #42b72a; animation-delay: 0.5s; }
        .w7  { height: 10px; background: #1877f2; animation-delay: 0.6s; }
        .w8  { height: 6px;  background: #42b72a; animation-delay: 0.7s; }
        .w9  { height: 12px; background: #1877f2; animation-delay: 0.8s; }
        .w10 { height: 8px;  background: #42b72a; animation-delay: 0.9s; }
        @keyframes dnm-wave-anim {
            0%,100% { transform: scaleY(0.35); opacity: 0.5; }
            50%      { transform: scaleY(1);    opacity: 1;   }
        }

        /* Label */
        .dnm-label {
            display: flex;
            align-items: center;
            gap: 7px;
            color: #1877f2;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 10px;
            animation: dnm-fade-up 0.4s 0.5s both;
        }

        /* Input wrapper */
        .dnm-input-wrap {
            position: relative;
            display: flex;
            align-items: center;
            background: #ffffff;
            border: 2px solid #e4e6eb;
            overflow: hidden;
            transition: border-color 0.2s;
        }
        .dnm-input-wrap:focus-within {
            border-color: #1877f2;
        }
        .dnm-input-prefix {
            padding: 0 12px;
            color: #1877f2;
            font-size: 1rem;
            flex-shrink: 0;
            border-right: 2px solid #e4e6eb;
            height: 48px;
            display: flex;
            align-items: center;
            background: #f0f2f5;
        }
        .document-name-input {
            flex: 1;
            padding: 12px 14px;
            background: transparent;
            border: none;
            outline: none;
            color: #050505;
            font-size: 0.9375rem;
            font-weight: 500;
            width: 100%;
            box-sizing: border-box;
        }
        .document-name-input::placeholder { color: #bcc0c4; }
        .document-name-input::selection   { background: #1877f2; color: white; }

        /* Animated focus bar */
        .dnm-input-focus-bar {
            position: absolute;
            bottom: 0; left: 0;
            height: 2px;
            width: 0%;
            background: linear-gradient(90deg, #42b72a, #1877f2);
            transition: width 0.3s ease;
        }
        .dnm-input-wrap:focus-within .dnm-input-focus-bar { width: 100%; }

        /* Hint */
        .dnm-hint {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 10px;
            font-size: 0.77rem;
            color: #8a8d91;
            line-height: 1.5;
            animation: dnm-fade-up 0.4s 0.6s both;
        }
        .dnm-hint kbd {
            background: #f0f2f5;
            border: 1px solid #d8dadf;
            padding: 1px 6px;
            font-size: 0.72rem;
            color: #1c1e21;
            font-family: monospace;
        }

        /* ── Footer ── */
        .dnm-footer {
            display: flex;
            gap: 0;
            border-top: 1px solid #e4e6eb;
            animation: dnm-fade-up 0.4s 0.65s both;
            background: #fff;
        }
        .dnm-btn {
            flex: 1;
            padding: 14px 20px;
            border: none;
            font-size: 0.9375rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: none;
        }
        .dnm-cancel {
            background: #f0f2f5;
            color: #65676b;
            border-right: 1px solid #e4e6eb;
        }
        .dnm-confirm {
            background: #1877f2;
            color: white;
        }
        .dnm-confirm i { font-size: 1rem; }

        /* ── Mobile ── */
        @media (max-width: 768px) {
            .dnm-modal { width: 96%; }
            .dnm-header { padding: 18px 16px 14px; gap: 12px; }
            .dnm-header-icon-wrap { width: 44px; height: 44px; }
            .dnm-header-icon-box { font-size: 0.95rem; }
            .dnm-header-text h3 { font-size: 1rem; }
            .dnm-header-text p { font-size: 0.76rem; }
            .dnm-body { padding: 16px; }
            .dnm-btn { padding: 12px 16px; font-size: 0.875rem; }
        }
        @media (max-width: 480px) {
            .dnm-modal { width: 98%; }
            .dnm-header { padding: 14px 12px 12px; gap: 10px; }
            .dnm-header-icon-wrap { width: 38px; height: 38px; }
            .dnm-header-text h3 { font-size: 0.95rem; }
            .dnm-header-badge { font-size: 0.6rem; padding: 2px 7px; }
            .dnm-body { padding: 14px 12px; }
            .dnm-footer { flex-direction: column; }
            .dnm-btn { padding: 12px 14px; font-size: 0.84rem; }
            .dnm-cancel { border-right: none; border-bottom: 1px solid #e4e6eb; }
            .dnm-wave-row { display: none; }
            .document-name-input { font-size: 0.875rem; padding: 10px 10px; }
            .dnm-hint { font-size: 0.72rem; }
        }

        @media (prefers-reduced-motion: reduce) {
            .dnm-modal { transition: none; }
            .dnm-scan-line,
            .dnm-p,
            .dnm-header-ring,
            .dnm-header-icon-box,
            .dnm-header-badge,
            .dnm-header-text h3,
            .dnm-header-text p,
            .dnm-wave-row,
            .dnm-label,
            .dnm-input-wrap,
            .dnm-hint,
            .dnm-footer { animation: none; }
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
    const existingModal = document.getElementById('confirmationModal');
    if (existingModal) existingModal.remove();

    const iconMap = {
        'modal-btn-danger':    { icon: 'bi-exclamation-triangle-fill', color: '#e4405f', bg: '#fdeaee' },
        'modal-btn-primary':   { icon: 'bi-question-circle-fill',      color: '#1877f2', bg: '#e7f0fd' },
        'modal-btn-warning':   { icon: 'bi-exclamation-circle-fill',   color: '#f7b928', bg: '#fef8e7' }
    };
    const style = iconMap[confirmClass] || iconMap['modal-btn-primary'];

    const modalHTML = `
        <div id="confirmationModal" class="cfm-overlay">
            <div class="cfm-modal">
                <div class="cfm-top-bar" style="background:${style.color}"></div>
                <div class="cfm-header">
                    <div class="cfm-icon-wrap" style="background:${style.bg}">
                        <i class="bi ${style.icon}" style="color:${style.color}"></i>
                    </div>
                    <div class="cfm-title-wrap">
                        <h3 class="cfm-title">${title}</h3>
                    </div>
                </div>
                <div class="cfm-body">
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="cfm-footer">
                    <button class="cfm-btn cfm-cancel" onclick="closeConfirmationModal()">
                        <i class="bi bi-x-circle"></i> Cancel
                    </button>
                    <button class="cfm-btn ${confirmClass}" onclick="handleConfirmation()" style="background:${style.color}">
                        <i class="bi bi-check-circle"></i> ${confirmText}
                    </button>
                </div>
            </div>
        </div>
    `;
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
        <div class="dst-scan-line"></div>
        <div class="dst-border-anim"></div>

        <div class="dst-particles" aria-hidden="true">
            <span class="dst-p p1"></span><span class="dst-p p2"></span>
            <span class="dst-p p3"></span><span class="dst-p p4"></span>
            <span class="dst-p p5"></span><span class="dst-p p6"></span>
            <span class="dst-p p7"></span><span class="dst-p p8"></span>
            <span class="dst-p p9"></span><span class="dst-p p10"></span>
            <span class="dst-p p11"></span><span class="dst-p p12"></span>
        </div>

        <div class="dst-body">

            <div class="dst-left-col">
                <div class="dst-icon-stage">
                    <div class="dst-ring r1"></div>
                    <div class="dst-ring r2"></div>
                    <div class="dst-ring r3"></div>
                    <svg class="dst-progress-ring" viewBox="0 0 96 96">
                        <circle class="dst-ring-bg"   cx="48" cy="48" r="42"/>
                        <circle class="dst-ring-fill" cx="48" cy="48" r="42" id="dlRingFill"/>
                    </svg>
                    <div class="dst-icon-box">
                        <div class="dst-file-anim">
                            <i class="bi bi-file-earmark-pdf-fill dst-pdf-icon"></i>
                            <div class="dst-dl-arrow">
                                <i class="bi bi-arrow-down-circle-fill"></i>
                            </div>
                        </div>
                        <div class="dst-check-flash">
                            <i class="bi bi-check-lg"></i>
                        </div>
                    </div>
                    <div class="dst-sparks" aria-hidden="true">
                        <span class="dst-sk sk1"><i class="bi bi-star-fill"></i></span>
                        <span class="dst-sk sk2"><i class="bi bi-stars"></i></span>
                        <span class="dst-sk sk3"><i class="bi bi-star-fill"></i></span>
                        <span class="dst-sk sk4"><i class="bi bi-stars"></i></span>
                        <span class="dst-sk sk5"><i class="bi bi-star-fill"></i></span>
                        <span class="dst-sk sk6"><i class="bi bi-stars"></i></span>
                    </div>
                </div>
                <div class="dst-count-circle">
                    <span id="dlCountNum">${DURATION}</span>
                    <small>sec</small>
                </div>
            </div>

            <div class="dst-text">
                <div class="dst-badge"><i class="bi bi-shield-check"></i> Saved Successfully</div>
                <div class="dst-title">PDF Downloaded!</div>
                <div class="dst-filename">
                    <i class="bi bi-file-earmark-pdf-fill"></i>
                    <span>${fileName || 'Lesson_Plan'}.pdf</span>
                </div>
                <div class="dst-msg">Your lesson plan has landed in your <strong>Downloads folder</strong>. Open it to confirm everything looks perfect before sharing.</div>
                <div class="dst-wave-row" aria-hidden="true">
                    <span class="dst-wave-bar wb1"></span>
                    <span class="dst-wave-bar wb2"></span>
                    <span class="dst-wave-bar wb3"></span>
                    <span class="dst-wave-bar wb4"></span>
                    <span class="dst-wave-bar wb5"></span>
                    <span class="dst-wave-bar wb6"></span>
                    <span class="dst-wave-bar wb7"></span>
                    <span class="dst-wave-bar wb8"></span>
                    <span class="dst-wave-bar wb9"></span>
                    <span class="dst-wave-bar wb10"></span>
                    <span class="dst-wave-bar wb11"></span>
                    <span class="dst-wave-bar wb12"></span>
                </div>
                <div class="dst-progress-wrap">
                    <div class="dst-countdown-bar-wrap">
                        <div class="dst-countdown-bar" id="dlCountBar"></div>
                        <div class="dst-countdown-shine"></div>
                    </div>
                    <span class="dst-progress-label">Auto-closing</span>
                </div>
            </div>

            <button class="dst-close" id="dlToastClose" title="Dismiss now">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    `;
    document.body.appendChild(toast);

    const ring     = document.getElementById('dlRingFill');
    const bar      = document.getElementById('dlCountBar');
    const num      = document.getElementById('dlCountNum');
    const closeBtn = document.getElementById('dlToastClose');

    const circumference = 2 * Math.PI * 42;
    ring.style.strokeDasharray  = circumference;
    ring.style.strokeDashoffset = circumference;

    let elapsed = 0;
    const tick  = 100;
    const steps = (DURATION * 1000) / tick;

    window._dlToastTimer = setInterval(() => {
        elapsed++;
        const progress = elapsed / steps;
        ring.style.strokeDashoffset = circumference * (1 - progress);
        bar.style.width = (progress * 100) + '%';
        const remaining = Math.ceil(DURATION - (elapsed * tick / 1000));
        num.textContent = remaining;
        if (elapsed >= steps) {
            clearInterval(window._dlToastTimer);
            toast.classList.add('dst-hide');
            setTimeout(() => toast.remove(), 500);
        }
    }, tick);

    function dismiss() {
        clearInterval(window._dlToastTimer);
        toast.classList.add('dst-hide');
        setTimeout(() => toast.remove(), 500);
    }
    closeBtn.addEventListener('click', dismiss);

    requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('dst-show')));
}

function addDownloadToastStyles() {
    if (document.querySelector('#dlToastStyles')) return;
    const s = document.createElement('style');
    s.id = 'dlToastStyles';
    s.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

        /* ── Toast wrapper ── */
        #dlSuccessToast {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 99998;
            width: 420px;
            max-width: calc(100vw - 32px);
            opacity: 0;
            transform: translateY(50px) scale(0.92);
            transition: opacity 0.5s cubic-bezier(0.22,1,0.36,1),
                        transform 0.5s cubic-bezier(0.22,1,0.36,1);
            pointer-events: none;
            filter: drop-shadow(0 16px 40px rgba(0,0,0,0.55));
        }
        #dlSuccessToast.dst-show {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
        }
        #dlSuccessToast.dst-hide {
            opacity: 0;
            transform: translateY(30px) scale(0.94);
            transition: opacity 0.45s ease, transform 0.45s ease;
        }

        /* Static accent border */
        .dst-border-anim {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
        }
        .dst-border-anim::before {
            content: '';
            position: absolute;
            inset: -3px;
            background: #1877f2;
        }
        .dst-border-anim::after {
            content: '';
            position: absolute;
            inset: 3px;
            background: #0d1b2a;
        }

        .dst-scan-line { display: none; }

        /* ── Particles hidden ── */
        .dst-particles { display: none; }

        /* ── Ambient glow removed ── */
        .dst-body::after { display: none; }

        /* ── Body ── */
        .dst-body {
            position: relative;
            z-index: 2;
            background: #0d1b2a;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 22px 18px 18px;
            overflow: hidden;
        }

        /* ── Left column ── */
        .dst-left-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }

        /* ── Icon stage ── */
        .dst-icon-stage {
            position: relative;
            width: 96px;
            height: 96px;
        }

        /* Rings removed */
        .dst-ring { display: none; }

        /* Progress ring SVG */
        .dst-progress-ring {
            position: absolute;
            inset: 0;
            width: 96px;
            height: 96px;
            transform: rotate(-90deg);
        }
        .dst-ring-bg {
            fill: none;
            stroke: rgba(255,255,255,0.07);
            stroke-width: 5;
        }
        .dst-ring-fill {
            fill: none;
            stroke: url(#dlRingGrad);
            stroke-width: 5;
            stroke-linecap: butt;
            transition: stroke-dashoffset 0.12s linear;
            filter: drop-shadow(0 0 4px #42b72a);
        }

        /* Icon box centre */
        .dst-icon-box {
            position: absolute;
            inset: 12px;
            background: linear-gradient(135deg, #112240, #1877f2 200%);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        .dst-icon-box::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
        }

        /* File download animation */
        .dst-file-anim {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: dst-file-dl 0.9s 0.2s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes dst-file-dl {
            0%   { transform: translateY(-30px); opacity: 0; }
            60%  { transform: translateY(4px); opacity: 1; }
            100% { transform: translateY(0); opacity: 1; }
        }
        .dst-pdf-icon {
            font-size: 1.5rem;
            color: #fff;
            display: block;
        }
        .dst-dl-arrow {
            font-size: 0.85rem;
            color: #42b72a;
            margin-top: -2px;
        }
        /* Check visible immediately after file animation */
        .dst-check-flash {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            color: #42b72a;
            opacity: 0;
            animation: dst-check-in 0.4s 1.2s ease both;
        }
        @keyframes dst-check-in {
            0%   { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
        }

        /* Sparks removed */
        .dst-sparks { display: none; }

        /* Countdown circle under icon */
        .dst-count-circle {
            width: 44px; height: 44px;
            background: rgba(255,255,255,0.06);
            border: 2px solid rgba(255,255,255,0.12);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }
        .dst-count-circle span {
            font-size: 1.1rem;
            font-weight: 800;
            color: #42b72a;
            font-variant-numeric: tabular-nums;
        }
        .dst-count-circle small {
            font-size: 0.55rem;
            color: rgba(255,255,255,0.4);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* ── Text column ── */
        .dst-text {
            flex: 1;
            min-width: 0;
            padding-top: 2px;
        }

        .dst-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: rgba(66,183,42,0.15);
            border: 1px solid rgba(66,183,42,0.4);
            color: #42b72a;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 3px 9px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-bottom: 7px;
        }
        .dst-title {
            font-size: 1.15rem;
            font-weight: 900;
            color: #fff;
            letter-spacing: -0.3px;
            margin-bottom: 5px;
        }
        .dst-filename {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.78rem;
            color: rgba(255,255,255,0.5);
            font-weight: 500;
            margin-bottom: 9px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .dst-filename i { color: #e34c4c; flex-shrink: 0; }
        .dst-msg {
            font-size: 0.82rem;
            color: rgba(255,255,255,0.72);
            line-height: 1.6;
            margin-bottom: 12px;
        }
        .dst-msg strong { color: #fff; font-weight: 700; }

        /* Waveform removed */
        .dst-wave-row { display: none; }

        /* Progress bar — simple fill, no shimmer */
        .dst-countdown-bar {
            height: 100%;
            width: 0%;
            background: #42b72a;
            transition: width 0.12s linear;
        }

        .dst-progress-wrap {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .dst-countdown-bar-wrap {
            flex: 1;
            height: 4px;
            background: rgba(255,255,255,0.1);
            overflow: hidden;
        }
        .dst-progress-label {
            font-size: 0.65rem;
            color: rgba(255,255,255,0.4);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            white-space: nowrap;
        }
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.5);
            cursor: pointer;
            padding: 0;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            flex-shrink: 0;
        }

        /* ── SVG gradient defs injected separately ── */

        /* ── Mobile ── */
        @media (max-width: 768px) {
            #dlSuccessToast { bottom: 16px; right: 16px; width: calc(100vw - 32px); max-width: 100%; }
            .dst-body { padding: 16px 14px 14px; gap: 14px; }
            .dst-icon-stage { width: 84px; height: 84px; }
            .dst-progress-ring { width: 84px; height: 84px; }
            .dst-title { font-size: 1rem; }
            .dst-msg { font-size: 0.82rem; }
            .dst-badge { font-size: 0.65rem; }
        }
        @media (max-width: 480px) {
            #dlSuccessToast { bottom: 10px; right: 10px; width: calc(100vw - 20px); }
            .dst-body { padding: 14px 10px 12px; gap: 10px; }
            .dst-icon-stage { width: 68px; height: 68px; }
            .dst-progress-ring { width: 68px; height: 68px; }
            .dst-pdf-icon { font-size: 1.1rem; }
            .dst-title { font-size: 0.9rem; }
            .dst-msg { font-size: 0.76rem; }
            .dst-badge { display: none; }
            .dst-wave-row { display: none; }
            .dst-particles { display: none; }
            .dst-count-circle { width: 36px; height: 36px; }
            .dst-count-circle span { font-size: 0.9rem; }
        }

        @media (prefers-reduced-motion: reduce) {
            .dst-scan-line,
            .dst-border-anim::before,
            .dst-ring,
            .dst-file-anim,
            .dst-dl-arrow,
            .dst-check-flash,
            .dst-sk,
            .dst-p,
            .dst-wave-bar,
            .dst-countdown-bar,
            .dst-body::after,
            .dst-badge,
            .dst-title,
            .dst-filename,
            .dst-msg,
            .dst-progress-wrap { animation: none; }
            #dlSuccessToast { transition: opacity 0.2s; }
        }
    `;
    document.head.appendChild(s);

    if (!document.getElementById('dlRingGradDefs')) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('id','dlRingGradDefs');
        svg.setAttribute('width','0');
        svg.setAttribute('height','0');
        svg.style.position = 'absolute';
        svg.innerHTML = `<defs>
            <linearGradient id="dlRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stop-color="#42b72a"/>
                <stop offset="50%"  stop-color="#1877f2"/>
                <stop offset="100%" stop-color="#f7b928"/>
            </linearGradient>
        </defs>`;
        document.body.appendChild(svg);
    }
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
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex; justify-content: center; align-items: center;
            z-index: 10000;
            animation: fadeIn 0.2s ease-out;
        }

        /* ── Confirmation modal (always on top) ── */
        .cfm-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10200;
            animation: fadeIn 0.2s ease-out;
        }
        .cfm-modal {
            background: #ffffff;
            width: 92%;
            max-width: 440px;
            overflow: hidden;
            animation: cfm-pop 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }
        @keyframes cfm-pop {
            0%   { opacity: 0; transform: scale(0.88) translateY(16px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .cfm-top-bar {
            height: 4px;
            width: 100%;
        }
        .cfm-header {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 20px 22px 14px;
            border-bottom: 1px solid #e4e6eb;
        }
        .cfm-icon-wrap {
            width: 44px; height: 44px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            animation: cfm-icon-in 0.4s 0.15s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes cfm-icon-in {
            0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
            100% { transform: scale(1) rotate(0deg);   opacity: 1; }
        }
        .cfm-title {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 800;
            color: #050505;
            line-height: 1.3;
        }
        .cfm-body {
            padding: 16px 22px;
            color: #444;
            font-size: 0.9rem;
            line-height: 1.65;
        }
        .cfm-body p { margin: 0; }
        .cfm-footer {
            display: flex;
            gap: 0;
            border-top: 1px solid #e4e6eb;
        }
        .cfm-btn {
            flex: 1;
            padding: 13px 18px;
            border: none;
            font-size: 0.9rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            transition: none;
        }
        .cfm-cancel {
            background: #f0f2f5;
            color: #65676b;
            border-right: 1px solid #e4e6eb;
        }
        .modal-btn-primary   { background: #1877f2; color: white; }
        .modal-btn-secondary { background: #f0f2f5; color: #65676b; }
        .modal-btn-danger    { background: #e4405f; color: white; }
        .modal-btn-warning   { background: #f7b928; color: white; }

        @media (max-width: 768px) {
            .cfm-modal { width: 94%; max-width: 400px; }
            .cfm-header { padding: 16px 18px 12px; gap: 12px; }
            .cfm-icon-wrap { width: 38px; height: 38px; font-size: 1.2rem; }
            .cfm-title { font-size: 0.98rem; }
            .cfm-body { padding: 14px 18px; font-size: 0.875rem; }
            .cfm-btn { padding: 12px 14px; font-size: 0.875rem; }
        }
        @media (max-width: 480px) {
            .cfm-modal { width: 97%; }
            .cfm-header { padding: 14px 14px 10px; gap: 10px; }
            .cfm-icon-wrap { width: 34px; height: 34px; font-size: 1.1rem; }
            .cfm-title { font-size: 0.9rem; }
            .cfm-body { padding: 12px 14px; font-size: 0.84rem; }
            .cfm-footer { flex-direction: column; }
            .cfm-btn { padding: 11px 14px; font-size: 0.84rem; }
            .cfm-cancel { border-right: none; border-bottom: 1px solid #e4e6eb; }
        }
        
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
                top: 10px;
                font-size: 0.875rem;
                padding: 11px 14px;
            }
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
        initDateTimeWidget();
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
        const subject       = document.getElementById('subject')?.value || '';
        const classes       = document.getElementById('classes')?.value || '';
        const streams       = document.getElementById('streams')?.value || '';
        const specificLesson = document.getElementById('specificLesson')?.value || '';
        const teacherName   = document.getElementById('teacherName')?.value || '';
        const school        = document.getElementById('school')?.value || '';
        const dateVal       = document.getElementById('date')?.value || new Date().toISOString().split('T')[0];

        if (!subject || !classes || !specificLesson) return;

        const existing = getTrackerData();

        const matchIndex = existing.findIndex(r =>
            r.specificLesson.trim().toLowerCase() === specificLesson.trim().toLowerCase() &&
            r.subject.trim().toLowerCase()        === subject.trim().toLowerCase() &&
            r.classes.trim().toLowerCase()        === classes.trim().toLowerCase()
        );

        if (matchIndex !== -1) {
            existing[matchIndex] = Object.assign({}, existing[matchIndex], {
                streams:     streams,
                teacherName: teacherName,
                school:      school,
                date:        dateVal,
                timestamp:   new Date().toISOString(),
                updatedAt:   new Date().toISOString(),
                timesEdited: (existing[matchIndex].timesEdited || 1) + 1
            });
        } else {
            existing.push({
                id:            generateUniqueId(),
                subject:       subject,
                classes:       classes,
                streams:       streams,
                specificLesson: specificLesson,
                teacherName:   teacherName,
                school:        school,
                date:          dateVal,
                timestamp:     new Date().toISOString(),
                updatedAt:     null,
                timesEdited:   1
            });
        }

        localStorage.setItem('lessonPlanTracker', JSON.stringify(existing));
    } catch (e) {}
}
function getTrackerData() {
    try {
        const stored = localStorage.getItem('lessonPlanTracker');
        return stored ? JSON.parse(stored) : [];
    } catch (e) { return []; }
}
function getRelativeTime(dateStr) {
    try {
        const recordDate = new Date(dateStr);
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const recordStart = new Date(recordDate.getFullYear(), recordDate.getMonth(), recordDate.getDate());
        const diffDays = Math.round((todayStart - recordStart) / (1000 * 60 * 60 * 24));
        if (diffDays === 0) return '<span class="trb trb-today">Today</span>';
        if (diffDays === 1) return '<span class="trb trb-yesterday">Yesterday</span>';
        if (diffDays <= 7) return `<span class="trb trb-week">${diffDays} days ago</span>`;
        if (diffDays <= 30) return `<span class="trb trb-month">${Math.ceil(diffDays / 7)} week${Math.ceil(diffDays / 7) > 1 ? 's' : ''} ago</span>`;
        if (diffDays <= 365) return `<span class="trb trb-old">${Math.ceil(diffDays / 30)} month${Math.ceil(diffDays / 30) > 1 ? 's' : ''} ago</span>`;
        return `<span class="trb trb-old">${Math.ceil(diffDays / 365)} year${Math.ceil(diffDays / 365) > 1 ? 's' : ''} ago</span>`;
    } catch (e) { return '<span class="trb trb-old">—</span>'; }
}

function filterTrackerRecords(records, filter) {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return records.filter(r => {
        const d = new Date(r.date);
        const diffDays = Math.round((todayStart - new Date(d.getFullYear(), d.getMonth(), d.getDate())) / (1000 * 60 * 60 * 24));
        if (filter === 'today')     return diffDays === 0;
        if (filter === 'yesterday') return diffDays === 1;
        if (filter === 'week')      return diffDays <= 7;
        if (filter === 'month')     return diffDays <= 30;
        return true;
    });
}

function formatExactTime(isoStr) {
    try {
        const d = new Date(isoStr);
        const hours = d.getHours();
        const mins = String(d.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const h12  = hours % 12 || 12;
        const days  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${h12}:${mins} ${ampm}, ${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    } catch (e) { return '—'; }
}

function buildTrackerBody(records) {
    if (records.length === 0) {
        return '<div class="tracker-empty"><i class="bi bi-journal-x"></i><p>No lesson plans found for this filter.</p></div>';
    }

    const grouped = {};
    records.forEach(r => {
        const classKey = r.classes || 'Unknown Class';
        if (!grouped[classKey]) grouped[classKey] = {};
        const dedupKey = (r.specificLesson + '|' + r.subject).trim().toLowerCase();
        if (!grouped[classKey][dedupKey]) {
            grouped[classKey][dedupKey] = r;
        } else {
            const existing = grouped[classKey][dedupKey];
            const existingTime = new Date(existing.timestamp || 0);
            const newTime      = new Date(r.timestamp || 0);
            if (newTime > existingTime) {
                grouped[classKey][dedupKey] = Object.assign({}, r, {
                    timesEdited: (existing.timesEdited || 1) + (r.timesEdited || 1) - 1,
                    updatedAt:   r.updatedAt || r.timestamp
                });
            }
        }
    });

    let html = '';
    Object.keys(grouped).sort().forEach(cls => {
        const planMap   = grouped[cls];
        const plans     = Object.values(planMap);
        const subjectSet = [...new Set(plans.map(p => p.subject))];
        html += `
            <div class="tracker-class-group">
                <div class="tracker-class-header">
                    <span class="tracker-class-icon"><i class="bi bi-building"></i></span>
                    <span class="tracker-class-name">Class: <strong>${cls}</strong></span>
                    <span class="tracker-class-badge">${plans.length} plan${plans.length !== 1 ? 's' : ''}</span>
                </div>
                <div class="tracker-subject-tags">
                    ${subjectSet.map(s => `<span class="tracker-subject-tag"><i class="bi bi-book"></i> ${s}</span>`).join('')}
                </div>
                <div class="tracker-plans-list">
                    ${plans.map((p, i) => `
                        <div class="tracker-plan-row">
                            <span class="tracker-plan-num">${i + 1}</span>
                            <div class="tracker-plan-info">
                                <span class="tpi-label"><i class="bi bi-bullseye"></i> Specific Activity:</span>
                                <strong class="tpi-activity">${p.specificLesson}${p.timesEdited > 1 ? ` <span class="tpi-edited-badge"><i class="bi bi-pencil-fill"></i> Updated ${p.timesEdited - 1}x</span>` : ''}</strong>
                                <div class="tpi-meta">
                                    <span><i class="bi bi-journal-text"></i> Subject: ${p.subject}</span>
                                    ${p.streams ? `<span><i class="bi bi-people"></i> Stream: ${p.streams}</span>` : ''}
                                    <span><i class="bi bi-calendar3"></i> ${p.date} &nbsp;${getRelativeTime(p.date)}</span>
                                    ${p.updatedAt
                                        ? `<span class="tpi-updated"><i class="bi bi-arrow-repeat"></i> Last updated: ${formatExactTime(p.updatedAt)}</span>`
                                        : `<span class="tpi-created"><i class="bi bi-clock"></i> Created: ${formatExactTime(p.timestamp)}</span>`}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    return html;
}

function showTrackerModal(activeFilter) {
    activeFilter = activeFilter || 'all';
    const existing = document.getElementById('trackerModal');
    if (existing) existing.remove();

    const allRecords = getTrackerData();
    const filtered   = filterTrackerRecords(allRecords, activeFilter);
    const total      = allRecords.length;
    const subjectSummary = [...new Set(allRecords.map(r => r.subject))];
    const classSummary   = [...new Set(allRecords.map(r => r.classes))];

    const filters = [
        { key: 'all',       label: 'All Time' },
        { key: 'today',     label: 'Today' },
        { key: 'yesterday', label: 'Yesterday' },
        { key: 'week',      label: 'This Week' },
        { key: 'month',     label: 'This Month' }
    ];

    const filterHTML = filters.map(f => `
        <button class="tracker-filter-btn ${activeFilter === f.key ? 'active' : ''}"
                onclick="showTrackerModal('${f.key}')">${f.label}</button>
    `).join('');

    const bodyHTML = allRecords.length === 0
        ? '<div class="tracker-empty"><i class="bi bi-journal-x"></i><p>No lesson plans recorded yet.<br><small>Lesson plans are automatically recorded each time you submit.</small></p></div>'
        : buildTrackerBody(filtered);

    const modalHTML = `
        <div id="trackerModal" class="tracker-modal-overlay">
            <div class="tracker-modal">
                <div class="tracker-modal-header">
                    <div class="tracker-header-title">
                        <i class="bi bi-journal-check"></i>
                        <h2>Lesson Plan Summary</h2>
                    </div>
                    <button class="tracker-close-btn" onclick="document.getElementById('trackerModal').remove(); document.body.style.overflow='auto';">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div class="tracker-stats-bar">
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${total}</span>
                        <span class="tracker-stat-label">Total Plans</span>
                    </div>
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${classSummary.length}</span>
                        <span class="tracker-stat-label">Classes</span>
                    </div>
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${subjectSummary.length}</span>
                        <span class="tracker-stat-label">Subjects</span>
                    </div>
                    <div class="tracker-stat">
                        <span class="tracker-stat-num">${filtered.length}</span>
                        <span class="tracker-stat-label">Showing</span>
                    </div>
                </div>
                <div class="tracker-filter-bar">
                    ${filterHTML}
                </div>
                <div class="tracker-modal-body" id="trackerModalBody">
                    ${bodyHTML}
                </div>
                <div class="tracker-modal-footer">
                    <button class="modal-btn modal-btn-danger" onclick="clearTrackerData()">
                        <i class="bi bi-trash3"></i> Clear All History
                    </button>
                    <button class="modal-btn modal-btn-secondary" onclick="document.getElementById('trackerModal').remove(); document.body.style.overflow='auto';">
                        <i class="bi bi-x-circle"></i> Close
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
        title: "Clear All History?",
        message: "Are you sure you want to delete all recorded lesson plans?\n\nThis action cannot be undone.",
        confirmText: "Yes, Clear All",
        confirmClass: "modal-btn-danger",
        onConfirm: function() {
            localStorage.removeItem('lessonPlanTracker');
            document.getElementById('trackerModal')?.remove();
            document.body.style.overflow = 'auto';
            showLessonNotification("All lesson plan history cleared.", "success");
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
        .tpi-label { display: block; font-size: 0.75rem; color: #1877f2; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 2px; }
        .tpi-activity { display: block; color: #050505; font-size: 0.9375rem; font-weight: 700; margin-bottom: 5px; }
        .tpi-meta { display: flex; flex-wrap: wrap; gap: 10px; }
        .tpi-meta span { color: #65676b; font-size: 0.8125rem; display: inline-flex; align-items: center; gap: 4px; }
        .tpi-edited-badge {
            display: inline-flex; align-items: center; gap: 3px;
            background: #f7b928; color: white; font-size: 0.7rem;
            font-weight: 700; padding: 1px 7px; vertical-align: middle;
            margin-left: 6px; letter-spacing: 0.03em;
        }
        .tpi-updated {
            color: #f7b928 !important; font-weight: 600;
        }
        .tpi-created {
            color: #8a8d91 !important; font-weight: 500;
        }
        .trb-today     { background: #42b72a; color: white; }
        .trb-yesterday { background: #f7b928; color: white; }
        .trb-week      { background: #1877f2; color: white; }
        .trb-month     { background: #8a8d91; color: white; }
        .trb-old       { background: #e4e6eb; color: #65676b; }
        .tracker-filter-bar {
            display: flex; gap: 0; flex-shrink: 0;
            border-bottom: 2px solid #e4e6eb; background: white;
            overflow-x: auto;
        }
        .tracker-filter-btn {
            padding: 10px 18px; border: none; border-right: 1px solid #e4e6eb;
            background: white; color: #65676b; cursor: pointer;
            font-size: 0.875rem; font-weight: 600; white-space: nowrap;
            border-bottom: 3px solid transparent; margin-bottom: -2px;
        }
        .tracker-filter-btn:last-child { border-right: none; }
        .tracker-filter-btn.active { color: #1877f2; border-bottom-color: #1877f2; background: #f0f4ff; }
        .tracker-modal-footer {
            padding: 14px 24px; border-top: 1px solid #e4e6eb; background: white;
            display: flex; justify-content: flex-end; gap: 10px; flex-shrink: 0;
        }
        @media (max-width: 768px) {
            .tracker-modal { width: 100%; max-height: 95vh; }
            .tracker-modal-header { padding: 14px 16px; }
            .tracker-header-title i { font-size: 1.2rem; }
            .tracker-header-title h2 { font-size: 1rem; }
            .tracker-stats-bar { padding: 10px 12px; }
            .tracker-stat { padding: 8px 6px; }
            .tracker-stat-num { font-size: 1.6rem; }
            .tracker-stat-label { font-size: 0.72rem; }
            .tracker-modal-body { padding: 14px 12px; }
            .tracker-filter-btn { padding: 9px 12px; font-size: 0.8rem; }
            .tracker-class-header { padding: 10px 14px; }
            .tracker-plan-row { padding: 10px 14px; }
            .tpi-activity { font-size: 0.875rem; }
            .tpi-meta { gap: 6px; }
            .tpi-meta span { font-size: 0.76rem; }
            .tracker-modal-footer { padding: 12px 16px; flex-direction: column; gap: 8px; }
            .tracker-modal-footer .modal-btn { width: 100%; justify-content: center; padding: 11px 14px; font-size: 0.875rem; }
        }
        @media (max-width: 480px) {
            .tracker-modal { max-height: 100vh; }
            .tracker-modal-header { padding: 12px 12px; }
            .tracker-header-title h2 { font-size: 0.9rem; }
            .tracker-stats-bar { padding: 8px; flex-wrap: wrap; }
            .tracker-stat { padding: 6px 4px; min-width: 48%; }
            .tracker-stat-num { font-size: 1.4rem; }
            .tracker-stat-label { font-size: 0.68rem; }
            .tracker-filter-btn { padding: 8px 10px; font-size: 0.76rem; }
            .tracker-modal-body { padding: 10px 8px; }
            .tracker-class-header { padding: 8px 10px; font-size: 0.875rem; }
            .tracker-subject-tags { padding: 8px 10px; gap: 6px; }
            .tracker-subject-tag { font-size: 0.72rem; padding: 3px 8px; }
            .tracker-plan-row { padding: 8px 10px; gap: 8px; }
            .tracker-plan-num { width: 22px; height: 22px; font-size: 0.72rem; }
            .tpi-label { font-size: 0.68rem; }
            .tpi-activity { font-size: 0.84rem; }
            .tpi-meta span { font-size: 0.72rem; }
            .tpi-edited-badge { font-size: 0.64rem; padding: 1px 5px; }
            .tracker-modal-footer { padding: 10px 8px; }
            .tracker-modal-footer .modal-btn { padding: 10px 12px; font-size: 0.84rem; }
        }
    `;
    document.head.appendChild(s);
}
function initDateTimeWidget() {
    if (document.getElementById('lpDateTimeWidget')) return;

    const isMobile = () => window.innerWidth < 768;
    const isHidden = isMobile() && localStorage.getItem('ldtHidden') === 'true';

    const widget = document.createElement('div');
    widget.id = 'lpDateTimeWidget';
    widget.innerHTML = `
        <div class="ldt-full" id="ldtFull" style="display:${isHidden ? 'none' : 'flex'}">
            <div class="ldt-inner">
                <div class="ldt-left">
                    <div class="ldt-day"  id="ldtDay"></div>
                    <div class="ldt-date" id="ldtDate"></div>
                </div>
                <div class="ldt-divider"></div>
                <div class="ldt-right">
                    <div class="ldt-time"  id="ldtTime"></div>
                    <div class="ldt-ampm"  id="ldtAmpm"></div>
                </div>
                <button class="ldt-hide-btn" id="ldtHideBtn" title="Hide clock">
                    <i class="bi bi-chevron-down"></i>
                </button>
            </div>
        </div>
        <button class="ldt-show-btn" id="ldtShowBtn" title="Show clock" style="display:${isHidden ? 'flex' : 'none'}">
            <i class="bi bi-clock"></i>
        </button>
    `;
    document.body.appendChild(widget);

    // Restore pointer-events correctly on load
    if (isHidden) {
        document.getElementById('lpDateTimeWidget').style.pointerEvents = 'none';
        document.getElementById('ldtShowBtn').style.pointerEvents = 'auto';
    }

    const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    function tick() {
        const now  = new Date();
        const h    = now.getHours();
        const m    = String(now.getMinutes()).padStart(2,'0');
        const sc   = String(now.getSeconds()).padStart(2,'0');
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12  = String(h % 12 || 12).padStart(2,'0');
        const dayEl  = document.getElementById('ldtDay');
        const dateEl = document.getElementById('ldtDate');
        const timeEl = document.getElementById('ldtTime');
        const amEl   = document.getElementById('ldtAmpm');
        if (dayEl)  dayEl.textContent  = days[now.getDay()];
        if (dateEl) dateEl.textContent = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
        if (timeEl) timeEl.textContent = `${h12}:${m}:${sc}`;
        if (amEl)   amEl.textContent   = ampm;
    }

    tick();
    setInterval(tick, 1000);

    function applyBodyPadding() {
        // Widget is at middle-left on mobile, no body padding needed
        document.body.style.paddingBottom = '';
    }

    document.getElementById('ldtHideBtn').addEventListener('click', function() {
        if (!isMobile()) return;
        document.getElementById('ldtFull').style.display = 'none';
        const showBtn = document.getElementById('ldtShowBtn');
        showBtn.style.display = 'flex';
        localStorage.setItem('ldtHidden', 'true');
        document.getElementById('lpDateTimeWidget').style.pointerEvents = 'none';
        showBtn.style.pointerEvents = 'auto';
        setTimeout(applyBodyPadding, 50);
    });

    document.getElementById('ldtShowBtn').addEventListener('click', function() {
        document.getElementById('ldtFull').style.display = 'flex';
        document.getElementById('ldtShowBtn').style.display = 'none';
        localStorage.setItem('ldtHidden', 'false');
        document.getElementById('lpDateTimeWidget').style.pointerEvents = 'auto';
        setTimeout(applyBodyPadding, 50);
    });

    window.addEventListener('resize', function() {
        if (!isMobile()) {
            document.getElementById('ldtFull').style.display = 'flex';
            document.getElementById('ldtShowBtn').style.display = 'none';
            document.getElementById('lpDateTimeWidget').style.pointerEvents = 'auto';
            document.body.style.paddingBottom = '';
        } else if (localStorage.getItem('ldtHidden') === 'true') {
            document.getElementById('ldtFull').style.display = 'none';
            const showBtn = document.getElementById('ldtShowBtn');
            showBtn.style.display = 'flex';
            document.getElementById('lpDateTimeWidget').style.pointerEvents = 'none';
            showBtn.style.pointerEvents = 'auto';
        }
        setTimeout(applyBodyPadding, 50);
    });

    // Apply after widget has rendered
    setTimeout(applyBodyPadding, 100);

    addDateTimeWidgetStyles();
}

function addDateTimeWidgetStyles() {
    if (document.querySelector('#ldtStyles')) return;
    const s = document.createElement('style');
    s.id = 'ldtStyles';
    s.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

        #lpDateTimeWidget {
            position: fixed;
            bottom: 16px;
            left: 16px;
            z-index: 9990;
            animation: ldt-fadein 0.4s ease both;
        }
        @keyframes ldt-fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        .ldt-full { display: flex; }

        .ldt-inner {
            display: flex;
            align-items: center;
            background: #0d1b2a;
            border-top: 3px solid #1877f2;
            padding: 8px 8px 8px 14px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            min-width: 200px;
            gap: 0;
        }

        .ldt-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            flex: 1;
        }

        .ldt-day {
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #42b72a;
        }

        .ldt-date {
            font-size: 0.78rem;
            font-weight: 600;
            color: rgba(255,255,255,0.75);
            letter-spacing: 0.02em;
        }

        .ldt-divider {
            width: 1px;
            height: 34px;
            background: rgba(255,255,255,0.12);
            margin: 0 12px;
            flex-shrink: 0;
        }

        .ldt-right {
            display: flex;
            align-items: baseline;
            gap: 4px;
        }

        .ldt-time {
            font-size: 1.25rem;
            font-weight: 800;
            color: #ffffff;
            font-variant-numeric: tabular-nums;
            letter-spacing: 0.02em;
            line-height: 1;
        }

        .ldt-ampm {
            font-size: 0.65rem;
            font-weight: 700;
            color: #1877f2;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            align-self: flex-end;
            margin-bottom: 2px;
        }

        /* Hide button — only visible on mobile/tablet */
        .ldt-hide-btn {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.5);
            width: 26px;
            height: 26px;
            display: none;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.7rem;
            flex-shrink: 0;
            margin-left: 10px;
            align-self: center;
            transition: none;
        }

        /* Small clock icon — middle-left, tiny */
        .ldt-show-btn {
            width: 28px;
            height: 28px;
            background: #0d1b2a;
            border: 2px solid #1877f2;
            border-left: none;
            color: #1877f2;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.8rem;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            transition: none;
            opacity: 0.85;
        }

        /* ── Below 768px: middle-left, fully inline, ultra-compact ── */
        @media (max-width: 768px) {
            #lpDateTimeWidget {
                bottom: auto;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
            .ldt-inner {
                padding: 5px 6px 5px 7px;
                min-width: unset;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                border-top: none;
                border-left: 3px solid #1877f2;
            }
            .ldt-left {
                flex-direction: row;
                align-items: center;
                gap: 4px;
                flex: none;
            }
            .ldt-day   { font-size: 0.52rem; letter-spacing: 0.04em; }
            .ldt-date  { font-size: 0.52rem; letter-spacing: 0; }
            .ldt-divider {
                width: 1px; height: 18px;
                margin: 0 3px;
            }
            .ldt-right { gap: 2px; align-items: baseline; }
            .ldt-time  { font-size: 0.72rem; letter-spacing: 0; }
            .ldt-ampm  { font-size: 0.48rem; margin-bottom: 0; }
            .ldt-hide-btn {
                display: flex;
                width: 16px; height: 16px;
                font-size: 0.5rem;
                margin-left: 4px;
                flex-shrink: 0;
            }
            .ldt-show-btn {
                width: 22px; height: 22px;
                font-size: 0.65rem;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            #lpDateTimeWidget { animation: none; }
        }
    `;
    document.head.appendChild(s);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLessonPlanFolderSystem);
} else {
    initializeLessonPlanFolderSystem();
}
