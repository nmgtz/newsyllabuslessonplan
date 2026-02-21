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
                        <span style="color: white; font-size: 50px;">✓</span>
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
                <span>✓</span>
                <span>Previous data restored successfully!</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 1.125rem; cursor: pointer; margin-left: 10px;">×</button>
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
        <div class="success-icon"><i class="bi bi-check-circle-fill"></i></div>
        <h2>Lesson Plan Created Successfully!</h2>
        <p>Your lesson plan has been generated and is ready for use. You can download it as a PDF or create a new lesson plan.</p>
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
    buttonContainer.appendChild(downloadBtn);
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(newLessonBtn);
    container.appendChild(messageContainer);
    container.appendChild(buttonContainer);
    downloadBtn.addEventListener('click', function() {
        const lessonContent = document.querySelector('#lessonTemp, .lesson-content, .lesson-template');
        if (lessonContent) {
            lessonContent.style.display = 'block';
            lessonContent.style.visibility = 'visible';
        }
        downloadDocument();
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
    addModernStyles();
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
        .success-message-container {
            background: #1877f2;
            color: white;
            padding: 40px 30px;
            text-align: center;
            margin: 20px auto;
            max-width: 700px;
            animation: slideIn 0.3s ease-out;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .success-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            animation: fadeIn 0.5s ease-in-out;
            color: white;
        }
        .success-message-container h2 {
            margin: 0 0 16px 0;
            font-size: 2rem;
            font-weight: 600;
            letter-spacing: -0.3px;
        }
        .success-message-container p {
            margin: 0;
            font-size: 1.0625rem;
            opacity: 0.9;
            line-height: 1.5;
            max-width: 600px;
            margin: 0 auto;
        }
        .button-container {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin: 30px auto;
            flex-wrap: wrap;
            max-width: 600px;
            padding: 20px;
        }
        .action-button {
            padding: 12px 20px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: background 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            min-width: 180px;
            justify-content: center;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            letter-spacing: 0.3px;
        }
        .primary-btn {
            background: #42b72a;
            color: white;
        }
        .primary-btn:hover {
            background: #36a420;
        }
        .secondary-btn {
            background: #e4e6eb;
            color: #050505;
        }
        .secondary-btn:hover {
            background: #d8dadf;
        }
        .tertiary-btn {
            background: #1877f2;
            color: white;
        }
        .tertiary-btn:hover {
            background: #166fe5;
        }
        .action-button i {
            font-size: 1.125rem;
        }
        .modern-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            min-width: 320px;
            padding: 14px 18px;
            animation: slideInRight 0.3s ease;
            font-size: 0.9375rem;
        }
        .alert-success {
            background: #42b72a;
            color: white;
        }
        .alert-warning {
            background: #f7b928;
            color: white;
        }
        .alert-error {
            background: #e4405f;
            color: white;
        }
        .alert-info {
            background: #1877f2;
            color: white;
        }
        .alert-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .alert-icon {
            font-size: 1.125rem;
            display: flex;
            align-items: center;
        }
        .alert-message {
            font-weight: 500;
            line-height: 1.4;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @media (max-width: 768px) {
            .success-message-container {
                margin: 10px;
                padding: 30px 20px;
            }
            .success-message-container h2 {
                font-size: 1.75rem;
                margin-bottom: 14px;
            }
            .success-message-container p {
                font-size: 1rem;
            }
            .success-icon {
                font-size: 3rem;
                margin-bottom: 16px;
            }
            .button-container {
                flex-direction: column;
                align-items: center;
                gap: 12px;
                margin: 20px auto;
            }
            .action-button {
                width: 260px;
                min-width: auto;
                padding: 12px 20px;
                font-size: 0.9375rem;
            }
            .modern-alert {
                right: 10px;
                left: 10px;
                min-width: auto;
                top: 10px;
            }
        }
        @media (max-width: 480px) {
            .success-message-container {
                margin: 5px;
                padding: 25px 16px;
            }
            .success-message-container h2 {
                font-size: 1.5rem;
            }
            .success-message-container p {
                font-size: 0.9375rem;
            }
            .success-icon {
                font-size: 2.5rem;
            }
            .action-button {
                width: 240px;
                padding: 11px 18px;
                font-size: 0.875rem;
                gap: 6px;
            }
            .action-button i {
                font-size: 1rem;
            }
            .modern-alert {
                padding: 12px 16px;
            }
            .alert-message {
                font-size: 0.875rem;
            }
        }
        @media (prefers-reduced-motion: reduce) {
            .success-message-container,
            .action-button,
            .modern-alert,
            .success-icon {
                animation: none;
            }
            .action-button {
                transition: none;
            }
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
                    showLessonNotification("PDF downloaded successfully!", "success");
                })
                .catch(error => {
                    hidePdfLoader();
                    showLessonNotification("Failed to generate PDF. Please try again.", "error");
                });
        }, 100);
    });
    document.getElementById('downloadPdfBtn').style.display = "none";
    userLoadd();
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
            const existingName = existingPlan.name || 'your current lesson plan';
            showConfirmationModal({
                title: "⚠️ Start a New Lesson Plan?",
                message: `You have a saved lesson plan:\n"${existingName}"\n\nCreating a new lesson plan will permanently ERASE this saved data and you will be taken back to Stage 1 to start fresh.\n\nThis action cannot be undone. Are you sure?`,
                confirmText: "Yes, Erase & Start New",
                confirmClass: "modal-btn-danger",
                onConfirm: () => {
                    clearCurrentSavedPlan();
                    const form = document.getElementById('lessonPlanForm');
                    if (form) {
                        form.reset();
                        const today = new Date().toISOString().split('T')[0];
                        const dateField = document.getElementById('date');
                        if (dateField) {
                            dateField.value = today;
                        }
                    }
                    hideLessonTemplate();
                    showLessonForm();
                    hideEditingBanner();
                    document.querySelectorAll('.back-to-folder-btn').forEach(btn => btn.remove());
                    if (window.lessonPlanFormInstance) {
                        window.lessonPlanFormInstance.currentStep = 1;
                        window.lessonPlanFormInstance.updateStep();
                    }
                    const formEl = document.getElementById('lessonPlanForm');
                    if (formEl) {
                        formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                    showLessonNotification("All clear! Starting new lesson plan from Stage 1.", "success");
                }
            });
        } else {
            const form = document.getElementById('lessonPlanForm');
            if (form) {
                form.reset();
                const today = new Date().toISOString().split('T')[0];
                const dateField = document.getElementById('date');
                if (dateField) {
                    dateField.value = today;
                }
            }
            hideLessonTemplate();
            showLessonForm();
            hideEditingBanner();
            document.querySelectorAll('.back-to-folder-btn').forEach(btn => btn.remove());
            if (window.lessonPlanFormInstance) {
                window.lessonPlanFormInstance.currentStep = 1;
                window.lessonPlanFormInstance.updateStep();
            }
            const formEl = document.getElementById('lessonPlanForm');
            if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth' });
            }
            showLessonNotification("Started new lesson plan from Stage 1", "success");
        }
    } catch (error) {
        showLessonNotification("Error starting new lesson plan", "error");
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
function addSaveButton() {
    try {
        const form = document.getElementById('lessonPlanForm');
        if (!form || document.getElementById('saveLessonBtn')) return;
        let buttonContainer = form.querySelector('.button-container') || 
                              form.querySelector('.form-actions') ||
                              form.querySelector('.buttons');
        if (!buttonContainer) {
            buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            form.appendChild(buttonContainer);
        }
        const saveBtn = document.createElement('button');
        saveBtn.id = 'saveLessonBtn';
        saveBtn.type = 'button';
        saveBtn.className = 'save-lesson-btn';
        saveBtn.innerHTML = '<i class="bi bi-floppy"></i> Save Lesson Plan';
        saveBtn.onclick = manualSaveLessonPlan;
        buttonContainer.appendChild(saveBtn);
    } catch (error) {
    }
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
        if (!document.getElementById('saveLessonBtn')) {
            addSaveButton();
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
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLessonPlanFolderSystem);
} else {
    initializeLessonPlanFolderSystem();
}
