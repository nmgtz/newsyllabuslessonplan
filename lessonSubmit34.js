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
        
        // Add input validation listeners
        this.form.addEventListener('input', (e) => this.clearError(e.target));
        this.form.addEventListener('change', (e) => this.clearError(e.target));
    }

   validateStep(step) {
    const currentStepElement = document.querySelector(`.step[data-step="${step}"]`);
    const requiredFields = currentStepElement.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        // Skip validation for hidden fields
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

    // ✅ Additional validation for step 2 (schedule) - Custom Distribution
    if (step === 2) {
        const period = document.getElementById('period')?.value;
        
        if (period === 'custom_distribution') {
            // ✅ FIX: Use window.validateDistribution since it's a global function
            if (typeof window.validateDistribution === 'function' && !window.validateDistribution()) {
                if (typeof showLessonNotification === 'function') {
                    showLessonNotification("⚠️ Time distribution must match the selected session type", "warning");
                }
                isValid = false;
            }
        }
    }

    // Additional validation for step 4 (students)
    if (step === 4) {
        const studentsOption = document.getElementById('studentsOption')?.value;
        
        // If "Leave Blank" is selected, skip student number validation
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
    
    // Check date only if dateOption is "set"
    const dateOption = document.getElementById('dateOption')?.value;
    const date = dateOption === 'set' ? document.getElementById('date')?.value : 'skip';
    
    // For baseline mode, use getValue helper
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
    )  {
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
        // Hide all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        document.querySelector(`.step[data-step="${this.currentStep}"]`).classList.add('active');

        // Update step indicators
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                indicator.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                indicator.classList.add('active');
            }
        });

        // Update step labels
        document.querySelectorAll('.step-label').forEach((label, index) => {
            label.classList.remove('active');
            if (index + 1 === this.currentStep) {
                label.classList.add('active');
            }
        });

        // Update buttons
        this.prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
        this.nextBtn.style.display = this.currentStep < this.totalSteps ? 'block' : 'none';
        this.submitBtn.style.display = this.currentStep === this.totalSteps ? 'block' : 'none';

        // Update progress
        this.updateProgress();
    }

    updateProgress() {
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateAllFields()) {
            console.error("Please fill in all required fields.");
            alert("Make sure You Fill all required selection and space and then click 'SUBMIT'");
            return; 
        }

        if (this.validateStep(this.currentStep)) {
            // Clear saved data since form is being submitted
            this.clearSavedData();
            
            // Update content (call the updateContent function if it exists)
            if (typeof updateContent === 'function') {
                updateContent();
            }
            
            // Show success message
            this.showSuccessMessage();
        }
    }

    showSuccessMessage() {
        const container = document.querySelector('.container');
        
        const successPageHTML = `
            <div class="success-page" style="text-align: center; padding: 40px 20px;">
                <div style="max-width: 600px; margin: 0 auto;">
                    <div style="width: 100px; height: 100px; background: #28a745; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px;">
                        <span style="color: white; font-size: 50px;">✓</span>
                    </div>
                    <h2 style="color: #28a745; margin-bottom: 20px;">Lesson Plan Created Successfully!</h2>
                    <p style="color: #6c757d; font-size: 1.2rem; margin-bottom: 30px; text-transform: capitalize; font-weight: bold; font-family: verdana;">
                        Your lesson plan has been successfully created and saved!
                    </p>
                    
                    <div style="margin: 30px 0;">
                        <button id="createNewBtn" class="btn btn-primary" style="background: #007bff; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; cursor: pointer; margin-right: 15px;">
                            Create New Lesson Plan
                        </button>
                        <button id="viewFormBtn" class="btn btn-secondary" style="background: #6c757d; color: white; border: none; padding: 15px 30px; font-size: 1.1rem; border-radius: 8px; cursor: pointer;">
                            View Form Data
                        </button>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                        <p style="color: #6c757d; font-size: 0.9rem;">Thank you for using our lesson plan creator!</p>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = successPageHTML;
        
        // Add event listeners for the new buttons
        document.getElementById('createNewBtn').addEventListener('click', () => {
            window.location.reload();
        });
        
        document.getElementById('viewFormBtn').addEventListener('click', () => {
            this.showFormData();
        });
    }

    showFormData() {
        const formData = this.getFormData();
        let dataHTML = '<div style="text-align: left; max-width: 800px; margin: 0 auto;">';
        dataHTML += '<h3 style="color: #333; margin-bottom: 20px;">Lesson Plan Details</h3>';
        
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                const label = this.getFieldLabel(key);
                dataHTML += `<p style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;"><strong>${label}:</strong> ${value}</p>`;
            }
        });
        
        dataHTML += '<button onclick="history.back()" style="margin-top: 20px; padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">Back to Success Page</button>';
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

    // Auto-save functionality
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
            console.error('Error saving form data:', error);
        }
    }

    loadSavedData() {
        try {
            const savedData = localStorage.getItem('lessonPlanFormData');
            
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                const { formData, timestamp } = parsedData;
                
                // Check if saved data is not too old (7 days)
                const savedDate = new Date(timestamp);
                const currentDate = new Date();
                const daysDifference = (currentDate - savedDate) / (1000 * 60 * 60 * 24);
                
                if (daysDifference > 7) {
                    this.clearSavedData();
                    return;
                }
                
                // Restore form data
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
            console.error('Error loading saved data:', error);
            this.clearSavedData();
        }
    }

    clearSavedData() {
        try {
            localStorage.removeItem('lessonPlanFormData');
        } catch (error) {
            console.error('Error clearing saved data:', error);
        }
    }

    showDataLoadedNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>✓</span>
                <span>Previous data restored successfully!</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
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

// Auto-focus functionality
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

// Add CSS for animations
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create global instance
    window.lessonPlanFormInstance = new LessonPlanForm();
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    const dateField = document.getElementById('date');
    if (dateField) {
        dateField.value = today;
    }
    
    // Setup auto-focus and auto-save
    setupAutoFocusNext();
    
    // Setup auto-save functionality
    const form = document.getElementById('lessonPlanForm');
    if (form) {
        // Load saved data
        window.lessonPlanFormInstance.loadSavedData();
        
        // Save data on input/change
        form.addEventListener('input', () => window.lessonPlanFormInstance.saveFormData());
        form.addEventListener('change', () => window.lessonPlanFormInstance.saveFormData());
    }
});
     

lessonplanSubmit.addEventListener('click', function (mySb) {
    mySb.preventDefault();
    
    if (!validateFields()) {
        // Modern alert styling
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
        <div class="success-icon">✅</div>
        <h2>Lesson Plan Created Successfully!</h2>
        <p>Your lesson plan has been generated and is ready for use. You can download it as a PDF or create a new lesson plan.</p>
    `;
    
    
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    
   
    const downloadBtn = document.createElement("button");
    downloadBtn.id = "downloadPdfBtn";
    downloadBtn.className = "action-button primary-btn";
    downloadBtn.innerHTML = `
        <span class="btn-icon">📥</span>
        Download PDF
    `;
    
    
    const backBtn = document.createElement("button");
    backBtn.id = "backBtn";
    backBtn.className = "action-button secondary-btn";
    backBtn.innerHTML = `
        <span class="btn-icon">🔙</span>
        Back to Saved Data
    `;
    
   
    const newLessonBtn = document.createElement("button");
    newLessonBtn.id = "newLessonBtn";
    newLessonBtn.className = "action-button tertiary-btn";
    newLessonBtn.innerHTML = `
        <span class="btn-icon">➕</span>
        Create New Lesson Plan
    `;
    
    
    buttonContainer.appendChild(downloadBtn);
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(newLessonBtn);
    
    
    container.appendChild(messageContainer);
    container.appendChild(buttonContainer);
    
    
    downloadBtn.addEventListener('click', function() {
        // Ensure lesson content is visible before downloading
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
            // Fallback: reload the page or show form
            location.reload();
        }
        
        showModernAlert("Returned to saved data view", "info");
    });
    
    newLessonBtn.addEventListener('click', function() {
        // Reset form or redirect to new lesson plan creation
        if (typeof resetLessonPlanForm === 'function') {
            resetLessonPlanForm();
        } else {
            // Fallback: reload the page or show form
            location.reload();
        }
        showModernAlert("Starting new lesson plan creation", "success");
    });
    
    
    addModernStyles();
    
    
    showModernAlert("Lesson plan generated successfully!", "success");
});


function showModernAlert(message, type = "info") {
    // Remove existing alerts
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
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 3000);
}


function getAlertIcon(type) {
    const icons = {
        success: "✅",
        warning: "⚠️",
        error: "❌",
        info: "ℹ️"
    };
    return icons[type] || icons.info;
}

// ✅ Function to add modern styles
function addModernStyles() {
    // Check if styles already exist
    if (document.querySelector('#modernLessonPlanStyles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modernLessonPlanStyles';
    styles.textContent = `


.success-message-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 50px 40px;
    border-radius: 20px;
    text-align: center;
    margin: 20px auto;
    max-width: 700px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(102, 126, 234, 0.4);
    animation: slideIn 0.8s ease-out;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
}

.success-message-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: shimmer 3s infinite;
    pointer-events: none;
}

.success-icon {
    font-size: 4rem;
    margin-bottom: 25px;
    animation: bounce 0.8s ease-in-out;
    text-shadow: 0 4px 8px rgba(0,0,0,0.3);
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
}

.success-message-container h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    background: linear-gradient(45deg, #ffffff, #f8f9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.success-message-container p {
    margin: 0;
    font-size: 1.2rem;
    opacity: 0.95;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.button-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 40px auto;
    flex-wrap: wrap;
    max-width: 600px;
    padding:  20px;
}

.action-button {
    padding: 32px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    gap: 12px;
    width: 220px;
    height: 56px;
    justify-content: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    backdrop-filter: blur(10px);
}

.action-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
}

.action-button:hover::before {
    left: 100%;
}

.primary-btn {
    background: linear-gradient(135deg, #28a745, #20c997, #17a2b8);
    color: white;
    box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
    border: 2px solid rgba(255,255,255,0.2);
}

.primary-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(40, 167, 69, 0.5);
    background: linear-gradient(135deg, #34ce57, #28d1a0, #20b2d1);
}

.primary-btn:active {
    transform: translateY(-2px) scale(1.02);
}

.secondary-btn {
    background: linear-gradient(135deg, #6c757d, #5a6268, #495057);
    color: white;
    box-shadow: 0 8px 25px rgba(108, 117, 125, 0.4);
    border: 2px solid rgba(255,255,255,0.2);
}

.secondary-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(108, 117, 125, 0.5);
    background: linear-gradient(135deg, #7c858d, #6a7278, #595f67);
}

.secondary-btn:active {
    transform: translateY(-2px) scale(1.02);
}

.tertiary-btn {
    background: linear-gradient(135deg, #17a2b8, #138496, #0f6674);
    color: white;
    box-shadow: 0 8px 25px rgba(23, 162, 184, 0.4);
    border: 2px solid rgba(255,255,255,0.2);
}

.tertiary-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(23, 162, 184, 0.5);
    background: linear-gradient(135deg, #1fb5d3, #17a2b8, #138496);
}

.tertiary-btn:active {
    transform: translateY(-2px) scale(1.02);
}

.btn-icon {
    font-size: 1.4rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.modern-alert {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 10000;
    min-width: 350px;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255,255,255,0.2);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.alert-success {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
}

.alert-warning {
    background: linear-gradient(135deg, #ffc107, #e0a800);
    color: #212529;
    box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3);
}

.alert-error {
    background: linear-gradient(135deg, #dc3545, #c82333);
    color: white;
    box-shadow: 0 10px 30px rgba(220, 53, 69, 0.3);
}

.alert-info {
    background: linear-gradient(135deg, #17a2b8, #138496);
    color: white;
    box-shadow: 0 10px 30px rgba(23, 162, 184, 0.3);
}

.alert-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.alert-icon {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.alert-message {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.4;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* Enhanced Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-15px);
    }
    60% {
        transform: translateY(-8px);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(150px) scale(0.8);
    }
    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(30deg);
    }
    100% {
        transform: translateX(100%) translateY(100%) rotate(30deg);
    }
}

/* Ultra Responsive Design */
@media (max-width: 1200px) {
    .success-message-container {
        margin: 15px;
        padding: 40px 30px;
    }
    
    .button-container {
        gap: 15px;
        margin: 30px auto;
    }
    
    .action-button {
        width: 200px;
        height: 52px;
        padding: 14px 28px;
    }
}

@media (max-width: 768px) {
    .success-message-container {
        margin: 10px;
        padding: 35px 25px;
        border-radius: 15px;
    }
    
    .success-message-container h2 {
        font-size: 2rem;
        margin-bottom: 15px;
    }
    
    .success-message-container p {
        font-size: 1.1rem;
    }
    
    .success-icon {
        font-size: 3rem;
        margin-bottom: 20px;
    }
    
    .button-container {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin: 25px auto;
    }
    
    .action-button {
        width: 280px;
        height: 52px;
        max-width: 320px;
        min-width: auto;
        padding: 16px 24px;
        font-size: 1rem;
    }
    
    .modern-alert {
        right: 15px;
        left: 15px;
        min-width: auto;
        top: 20px;
    }
}

@media (max-width: 480px) {
    .success-message-container {
        margin: 5px;
        padding: 30px 20px;
    }
    
    .success-message-container h2 {
        font-size: 1.8rem;
    }
    
    .success-message-container p {
        font-size: 1rem;
    }
    
    .success-icon {
        font-size: 2.5rem;
    }
    
    .action-button {
        width: 260px;
        height: 50px;
        padding: 14px 20px;
        font-size: 0.95rem;
        gap: 10px;
    }
    
    .btn-icon {
        font-size: 1.2rem;
    }
    
    .modern-alert {
        padding: 15px;
        right: 10px;
        left: 10px;
    }
    
    .alert-message {
        font-size: 1rem;
    }
}

@media (max-width: 320px) {
    .success-message-container {
        padding: 25px 15px;
    }
    
    .success-message-container h2 {
        font-size: 1.6rem;
    }
    
    .action-button {
        width: 240px;
        height: 48px;
        padding: 12px 16px;
        font-size: 0.9rem;
    }
}

/* High DPI and Retina Display Support */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
    .success-message-container {
        box-shadow: 0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(102, 126, 234, 0.3);
    }
    
    .action-button {
        box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .success-message-container {
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        border: 1px solid rgba(255,255,255,0.15);
    }
    
    .alert-warning {
        color: #1a202c;
    }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .success-message-container,
    .action-button,
    .modern-alert {
        animation: none;
    }
    
    .action-button {
        transition: none;
    }
    
    .success-icon {
        animation: none;
    }
}
    `;
    
    document.head.appendChild(styles);
}


function validateFields() {
    const isBaseline = document.getElementById("subject")?.value === 'Baseline';
    
    // Smart helper to get values
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
    
    // Check date only if dateOption is "set"
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
    
    // Get baseline-aware values
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
    
    // Create modal for document name input
    showDocumentNameModal(defaultName1, (documentName) => {
        const finalName = documentName.trim() === "" ? defaultName : documentName.trim().replace(/\s+/g, "_"); 

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
  });
    }); 
document.getElementById('downloadPdfBtn').style.display="none";
userLoadd()

};
     
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

function getSavedLessonPlans() {
    try {
        if (typeof(Storage) !== "undefined") {
            const stored = localStorage.getItem('lessonPlanFolder');
            if (stored) {
                const parsed = JSON.parse(stored);
                window.onlineLessonFolder = parsed;
                return parsed;
            }
        }
        return window.onlineLessonFolder || [];
    } catch (error) {
        return window.onlineLessonFolder || [];
    }
}

function saveLessonPlansToStorage(lessonPlans) {
    try {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('lessonPlanFolder', JSON.stringify(lessonPlans));
        }
        
        window.onlineLessonFolder = lessonPlans;
        
        return true;
    } catch (error) {
        if (error.name === 'QuotaExceededError') {
            showLessonNotification("Storage is full! Please delete some old lesson plans.", "warning");
        } else {
            showLessonNotification("Failed to save permanently, using temporary storage", "warning");
        }
        
        window.onlineLessonFolder = lessonPlans;
        return false;
    }
}

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getStorageInfo() {
    try {
        if (typeof(Storage) === "undefined") {
            return { supported: false, message: "LocalStorage not supported" };
        }
        
        const savedPlans = getSavedLessonPlans();
        const storageData = localStorage.getItem('lessonPlanFolder');
        const sizeInBytes = storageData ? new Blob([storageData]).size : 0;
        const sizeInKB = (sizeInBytes / 1024).toFixed(2);
        
        return {
            supported: true,
            totalPlans: savedPlans.length,
            storageSize: sizeInKB + ' KB',
            lastUpdated: savedPlans.length > 0 ? 
                new Date(Math.max(...savedPlans.map(p => new Date(p.timestamp)))).toLocaleString() : 
                'Never'
        };
    } catch (error) {
        return { supported: false, message: "Error accessing storage" };
    }
}

function clearAllLessonPlans() {
    showConfirmationModal({
        title: "Clear All Lesson Plans",
        message: "Are you sure you want to delete ALL saved lesson plans?\n\nThis action cannot be undone and will permanently remove all your saved lessons from your browser's storage!",
        confirmText: "Delete All",
        confirmClass: "modal-btn-danger",
        onConfirm: () => {
            try {
                if (typeof(Storage) !== "undefined") {
                    localStorage.removeItem('lessonPlanFolder');
                }
                window.onlineLessonFolder = [];
                displayFolderModal();
                showLessonNotification("All lesson plans deleted permanently!", "success");
            } catch (error) {
                showLessonNotification("Failed to clear lesson plans", "error");
            }
        }
    });
}

function exportLessonPlans() {
    try {
        const savedPlans = getSavedLessonPlans();
        if (savedPlans.length === 0) {
            showLessonNotification("No lesson plans to export", "warning");
            return;
        }
        
        const dataStr = JSON.stringify(savedPlans, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `lesson-plans-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        showLessonNotification(`Exported ${savedPlans.length} lesson plans successfully!`, "success");
    } catch (error) {
        showLessonNotification("Failed to export lesson plans", "error");
    }
}

function saveNewLessonPlan(name, formData, isAutoSave = false) {
    try {
        const lessonPlan = {
            name: name,
            data: formData,
            date: formData.date || new Date().toISOString().split('T')[0],
            timestamp: new Date().toISOString(),
            autoSaved: isAutoSave,
            version: 1,
            id: generateUniqueId()
        };
        
        const savedPlans = getSavedLessonPlans();
        savedPlans.push(lessonPlan);
        
        const saved = saveLessonPlansToStorage(savedPlans);
        
        if (saved && !isAutoSave) {
            showLessonNotification("Lesson plan saved permanently!", "success");
        } else if (!saved && !isAutoSave) {
            showLessonNotification("Lesson plan saved temporarily only", "warning");
        }
        
        return saved;
        
    } catch (error) {
        showLessonNotification("Failed to save lesson plan", "error");
        return false;
    }
}

function updateExistingLessonPlan(name, formData, isAutoSave = false) {
    try {
        const savedPlans = getSavedLessonPlans();
        const existingIndex = savedPlans.findIndex(plan => plan.name === name);
        
        if (existingIndex !== -1) {
            const existingPlan = savedPlans[existingIndex];
            savedPlans[existingIndex] = {
                name: name,
                data: formData,
                date: formData.date || new Date().toISOString().split('T')[0],
                timestamp: new Date().toISOString(),
                autoSaved: isAutoSave,
                version: (existingPlan.version || 1) + 1,
                originalTimestamp: existingPlan.originalTimestamp || existingPlan.timestamp,
                id: existingPlan.id || generateUniqueId()
            };
            
            const saved = saveLessonPlansToStorage(savedPlans);
            
            if (saved && !isAutoSave) {
                showLessonNotification("Lesson plan updated permanently!", "success");
            } else if (!saved && !isAutoSave) {
                showLessonNotification("Lesson plan updated temporarily only", "warning");
            }
            
            return saved;
        }
        return false;
    } catch (error) {
        showLessonNotification("Failed to update lesson plan", "error");
        return false;
    }
}

function confirmDeleteLessonPlan(lessonName) {
    try {
        const savedPlans = getSavedLessonPlans();
        const newPlans = savedPlans.filter(plan => plan.name !== lessonName);
        
        const saved = saveLessonPlansToStorage(newPlans);
        
        if (saved) {
            showLessonNotification("Lesson plan deleted permanently!", "success");
        } else {
            showLessonNotification("Lesson plan deleted from temporary storage", "warning");
        }
        
        return saved;
    } catch (error) {
        showLessonNotification("Failed to delete lesson plan", "error");
        return false;
    }
}

function sortLessonPlans(sortBy) {
    try {
        const savedPlans = getSavedLessonPlans();
        
        if (sortBy === 'date') {
            savedPlans.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } else if (sortBy === 'name') {
            savedPlans.sort((a, b) => a.name.localeCompare(b.name));
        }
        
        saveLessonPlansToStorage(savedPlans);
        displayFolderModal();
        
        const sortText = sortBy === 'date' ? 'newest first' : 'alphabetically';
        showLessonNotification(`Sorted ${sortText}`, "info");
    } catch (error) {
        showLessonNotification("Failed to sort lesson plans", "error");
    }
}

function setupAutoSaveSystem() {
    let autoSaveTimeout;
    const formFields = ['subject', 'specificLesson', 'date', 'classes', 'teacherName', 'school'];
    
    formFields.forEach(fieldId => {
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
        
        if (!lessonName || lessonName === 'Subject - Lesson ()') {
            return;
        }
        
        const existingPlans = getSavedLessonPlans();
        const existingPlan = existingPlans.find(plan => plan.name === lessonName);
        
        let saved = false;
        
        if (existingPlan) {
            saved = updateExistingLessonPlan(lessonName, formData, true);
        } else {
            saved = saveNewLessonPlan(lessonName, formData, true);
        }
        
        if (saved) {
            showLessonNotification(`Auto-saved: ${lessonName} (Permanent)`, "success");
        } else {
            showLessonNotification(`Auto-saved: ${lessonName} (Temporary)`, "info");
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

function createFolderModal() {
    const folderModalHTML = `
        <div id="lessonPlanFolderModal" class="folder-modal-overlay" style="display: none;">
            <div class="folder-modal">
                <div class="folder-modal-header">
                    <div class="folder-modal-title">
                        <span class="folder-icon"><i class="bi bi-folder2-open"></i></span>
                        <h2>My Lesson Plans</h2>
                        <span class="folder-count" id="modalFolderCount">(0)</span>
                    </div>
                    <div class="folder-modal-actions">
                        <button class="folder-btn sort-btn" onclick="sortLessonPlans('date')" title="Sort by Date">
                            <i class="bi bi-calendar3"></i>
                        </button>
                        <button class="folder-btn sort-btn" onclick="sortLessonPlans('name')" title="Sort by Name">
                            <i class="bi bi-sort-alpha-down"></i>
                        </button>
                        <button class="folder-btn refresh-btn" onclick="refreshFolderModal()" title="Refresh">
                            <i class="bi bi-arrow-clockwise"></i>
                        </button>
                        <button class="folder-btn close-btn" onclick="closeFolderModal()" title="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
                <div class="folder-modal-content" id="modalFolderContent">
                    <div class="empty-folder" id="modalEmptyFolder">
                        <div class="empty-icon"><i class="bi bi-file-earmark-text"></i></div>
                        <p>No saved lesson plans yet</p>
                        <small>Your lesson plans will be automatically saved here!</small>
                    </div>
                </div>
                <div class="folder-modal-footer">
                    <div class="modal-footer-actions">
                        <button class="modal-footer-btn secondary-btn" onclick="exportLessonPlans()" title="Export all lesson plans as backup">
                            <i class="bi bi-download"></i> Export Backup
                        </button>
                        <button class="modal-footer-btn danger-btn" onclick="clearAllLessonPlans()" title="Delete all lesson plans">
                            <i class="bi bi-trash3"></i> Clear All
                        </button>
                        <button class="modal-footer-btn create-new-btn" onclick="createNewLessonFromModal()">
                            <i class="bi bi-plus-circle"></i> Create New Lesson Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', folderModalHTML);
}

function displayFolderModal() {
    const modalContent = document.getElementById('modalFolderContent');
    const folderCount = document.getElementById('modalFolderCount');
    
    if (!modalContent) return;
    
    const savedPlans = getSavedLessonPlans();
    
    if (savedPlans.length === 0) {
        modalContent.innerHTML = `
            <div class="empty-folder">
                <div class="empty-icon"><i class="bi bi-file-earmark-text"></i></div>
                <p>No saved lesson plans yet</p>
                <small>Your lesson plans will be automatically saved here!</small>
            </div>
        `;
        folderCount.textContent = '(0)';
        return;
    }
    
    folderCount.textContent = `(${savedPlans.length})`;
    
    let planListHTML = '<div class="lesson-plans-modal-grid">';
    
    savedPlans.forEach((plan, index) => {
        const planDate = new Date(plan.date).toLocaleDateString();
        const saveTime = new Date(plan.timestamp).toLocaleString();
        
        planListHTML += `
            <div class="lesson-plan-modal-card" data-index="${index}">
                <div class="modal-card-header">
                    <div class="modal-card-title" onclick="loadLessonPlanFromModal('${plan.name.replace(/'/g, "\\'")}')">
                        <i class="bi bi-file-earmark-text"></i> ${plan.name}
                    </div>
                    <div class="modal-card-status">
                        ${plan.autoSaved ? '<span class="auto-saved-badge">Auto-saved</span>' : '<span class="manual-saved-badge">Manual</span>'}
                    </div>
                </div>
                <div class="modal-card-meta">
                    <div><i class="bi bi-calendar-event"></i> ${planDate}</div>
                    <div><i class="bi bi-clock"></i> ${saveTime}</div>
                </div>
                <div class="modal-card-preview">
                    <small><strong>Subject:</strong> ${plan.data.subject || 'N/A'}</small>
                    <small><strong>Class:</strong> ${plan.data.classes || 'N/A'}</small>
                    <small><strong>Period:</strong> ${plan.data.period || 'N/A'}</small>
                </div>
                <div class="modal-card-actions">
                    <button class="modal-card-btn view-btn" onclick="viewLessonPlanFromModal('${plan.name.replace(/'/g, "\\'")}')">
                        <i class="bi bi-eye"></i> View
                    </button>
                    <button class="modal-card-btn edit-btn" onclick="editLessonPlanFromModal('${plan.name.replace(/'/g, "\\'")}')">
                        <i class="bi bi-pencil-square"></i> Edit
                    </button>
                    <button class="modal-card-btn download-btn" onclick="downloadSavedPlanFromModal('${plan.name.replace(/'/g, "\\'")}')">
                        <i class="bi bi-download"></i> Download
                    </button>
                    <button class="modal-card-btn delete-btn" onclick="deleteLessonPlanFromModal('${plan.name.replace(/'/g, "\\'")}')">
                        <i class="bi bi-trash3"></i> Delete
                    </button>
                </div>
            </div>
        `;
    });
    
    planListHTML += '</div>';
    modalContent.innerHTML = planListHTML;
}

function showFolderModal() {
    const modal = document.getElementById('lessonPlanFolderModal');
    if (modal) {
        displayFolderModal();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeFolderModal() {
    const modal = document.getElementById('lessonPlanFolderModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function refreshFolderModal() {
    displayFolderModal();
    showLessonNotification("Folder refreshed", "info");
}

function viewLessonPlanFromModal(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const plan = savedPlans.find(p => p.name === lessonName);
    
    if (!plan) {
        showLessonNotification("Lesson plan not found!", "error");
        return;
    }
    
    loadDataIntoFormSilently(plan.data);
    
    if (typeof updateContent === 'function') {
        updateContent();
    }
    
    setTimeout(() => {
        showLessonPlanModal(lessonName, plan);
    }, 300);
}

function showLessonPlanModal(lessonName, planData) {
    try {
        const existingModal = document.getElementById('lessonViewModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        const lessonTemp = document.getElementById('lessonTemp');
        let lessonContent = '';
        
        if (lessonTemp) {
            lessonContent = lessonTemp.innerHTML;
        } else {
            lessonContent = '<div style="padding: 40px; text-align: center; color: #65676b;">Lesson plan content not available</div>';
        }
        
        const modalHTML = `
            <div id="lessonViewModal" class="lesson-view-modal-overlay">
                <div class="lesson-view-modal">
                    <div class="lesson-view-modal-header">
                        <div class="lesson-view-title">
                            <span class="lesson-icon"><i class="bi bi-file-earmark-text"></i></span>
                            <h2>${lessonName}</h2>
                        </div>
                        <div class="lesson-view-actions">
                            <button class="lesson-view-btn download-btn" onclick="closeLessonViewModal(); downloadLessonFromModal('${lessonName.replace(/'/g, "\\'")}')">
                                <i class="bi bi-download"></i> Download
                            </button>
                            <button class="lesson-view-btn edit-btn" onclick="editFromLessonModal('${lessonName.replace(/'/g, "\\'")}')">
                                <i class="bi bi-pencil-square"></i> Edit
                            </button>
                            <button class="lesson-view-btn close-btn" onclick="closeLessonViewModal()">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div class="lesson-view-content" id="lessonViewContent">
                        ${lessonContent}
                    </div>
                    <div class="lesson-view-footer">
                        <div class="lesson-meta">
                            <div><i class="bi bi-calendar-event"></i> Date: ${planData.date}</div>
                            <div><i class="bi bi-clock"></i> Saved: ${new Date(planData.timestamp).toLocaleDateString()}</div>
                        </div>
                        <div class="lesson-footer-actions">
                            <button class="lesson-footer-btn secondary-btn" onclick="closeLessonViewModal()">
                                <i class="bi bi-arrow-left-circle"></i> Back to Folder
                            </button>
                            <button class="lesson-footer-btn primary-btn" onclick="closeLessonViewModal(); downloadLessonFromModal('${lessonName.replace(/'/g, "\\'")}')">
                                <i class="bi bi-download"></i> Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        document.body.style.overflow = 'hidden';
        
        addLessonViewModalStyles();
        
        showLessonNotification(`Viewing: ${lessonName}`, "success");
        
    } catch (error) {
        showLessonNotification("Error displaying lesson plan", "error");
    }
}

function closeLessonViewModal() {
    const modal = document.getElementById('lessonViewModal');
    if (modal) {
        modal.remove();
    }
    document.body.style.overflow = 'auto';
    
    showFolderModal();
}

function downloadLessonFromModal(lessonName) {
    try {
        if (typeof downloadDocument === 'function') {
            downloadDocument();
            showLessonNotification(`Downloaded: ${lessonName}`, "success");
        } else {
            showLessonNotification("Download system not available", "error");
        }
    } catch (error) {
        showLessonNotification("Download failed", "error");
    }
}

function editFromLessonModal(lessonName) {
    closeLessonViewModal();
    editLessonPlanFromModal(lessonName);
}

function editLessonPlanFromModal(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const plan = savedPlans.find(p => p.name === lessonName);
    
    if (!plan) {
        showLessonNotification("Lesson plan not found!", "error");
        return;
    }
    
    closeFolderModal();
    loadDataIntoForm(plan.data);
    showEditingBanner(lessonName);
    showLessonForm();
    
    if (typeof updateContent === 'function') {
        updateContent();
    }
    
    setTimeout(() => {
        const form = document.getElementById('lessonPlanForm');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
    
    showLessonNotification(`Editing: ${lessonName}`, "info");
}

function downloadSavedPlanFromModal(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const plan = savedPlans.find(p => p.name === lessonName);
    
    if (!plan) {
        showLessonNotification("Lesson plan not found!", "error");
        return;
    }
    
    loadDataIntoFormSilently(plan.data);
    
    if (typeof updateContent === 'function') {
        updateContent();
    }
    
    setTimeout(() => {
        if (typeof downloadDocument === 'function') {
            downloadDocument();
            showLessonNotification(`Downloaded: ${lessonName}`, "success");
        } else {
            showLessonNotification("Download system not available", "error");
        }
    }, 800);
}

function deleteLessonPlanFromModal(lessonName) {
    showConfirmationModal({
        title: "Delete Lesson Plan",
        message: `Are you sure you want to delete "${lessonName}"?\n\nThis action cannot be undone.`,
        confirmText: "Delete",
        confirmClass: "modal-btn-danger",
        onConfirm: () => {
            confirmDeleteLessonPlan(lessonName);
            displayFolderModal();
        }
    });
}

function createNewLessonFromModal() {
    closeFolderModal();
    createNewLessonPlan();
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
        // Error handling
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
        // Error handling
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
        // Error handling
    }
}

function manualSaveLessonPlan() {
    if (!hasMinimumRequiredFields()) {
        showLessonNotification("Please fill in Subject and Specific Lesson fields", "error");
        return false;
    }
    
    const formData = getCurrentFormData();
    const lessonName = generateLessonName(formData);
    
    const existingPlans = getSavedLessonPlans();
    const existingPlan = existingPlans.find(plan => plan.name === lessonName);
    
    if (existingPlan) {
        showConfirmationModal({
            title: "Lesson Plan Exists",
            message: `A lesson plan "${lessonName}" already exists.\n\nDo you want to replace it?`,
            confirmText: "Replace",
            confirmClass: "modal-btn-warning",
            onConfirm: () => {
                updateExistingLessonPlan(lessonName, formData, false);
            }
        });
        return false;
    } else {
        saveNewLessonPlan(lessonName, formData, false);
        return true;
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
        // Error handling
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
        // Error handling
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
        // Error handling
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
        // Error handling
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
        // Error handling
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
        // Error handling
    }
}

function hideEditingBanner() {
    const banner = document.querySelector('.editing-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

function addBackToFolderButton() {
    document.querySelectorAll('.back-to-folder-btn').forEach(btn => btn.remove());
    
    const backButton = document.createElement('button');
    backButton.className = 'back-to-folder-btn lesson-action-btn';
    backButton.innerHTML = '<i class="bi bi-arrow-left-circle"></i> Back to My Lesson Plans';
    backButton.onclick = () => {
        hideLessonTemplate();
        document.querySelectorAll('.back-to-folder-btn').forEach(btn => btn.remove());
        showFolderModal();
    };
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentElement('afterbegin', backButton);
    }
}

function addFolderToggleButton() {
    const container = document.querySelector('.container');
    if (!container || document.getElementById('folderToggleBtn')) return;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'folderToggleBtn';
    toggleBtn.className = 'folder-toggle-btn';
    toggleBtn.innerHTML = '<i class="bi bi-folder2-open"></i> My Lesson Plans';
    toggleBtn.onclick = showFolderModal;
    
    container.insertAdjacentElement('afterbegin', toggleBtn);
}

function createNewLessonPlan() {
    try {
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
        
        showLessonNotification("Started new lesson plan", "success");
    } catch (error) {
        showLessonNotification("Error creating new lesson plan", "error");
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
        // Error handling
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


function addFolderSystemStyles() {
    if (document.querySelector('#enhancedFolderStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'enhancedFolderStyles';
    style.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
        
        /* Folder Toggle Button */
        .folder-toggle-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: #1877f2;
            color: white;
            border: none;
            padding: 10px 18px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.2s ease;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        
        .folder-toggle-btn:hover {
            background: #166fe5;
        }
        
        /* Folder Modal Overlay */
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
        
        /* Folder Modal */
        .folder-modal {
            background: white;
            width: 95%;
            max-width: 1200px;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        /* Modal Header */
        .folder-modal-header {
            background: #1877f2;
            color: white;
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .folder-modal-title {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .folder-modal-title h2 {
            margin: 0;
            font-size: 1.375rem;
            font-weight: 600;
        }
        
        .folder-count {
            background: rgba(255, 255, 255, 0.2);
            padding: 4px 12px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .folder-modal-actions {
            display: flex;
            gap: 8px;
        }
        
        .folder-btn {
            padding: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            cursor: pointer;
            transition: background 0.2s ease;
            font-size: 1.125rem;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .folder-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .close-btn {
            background: transparent;
            border: 1px solid transparent;
        }
        
        .close-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }
        
        /* Modal Content */
        .folder-modal-content {
            flex: 1;
            overflow-y: auto;
            padding: 24px;
            background: #f0f2f5;
        }
        
        .folder-modal-content::-webkit-scrollbar {
            width: 8px;
        }
        
        .folder-modal-content::-webkit-scrollbar-track {
            background: #e4e6eb;
        }
        
        .folder-modal-content::-webkit-scrollbar-thumb {
            background: #bcc0c4;
        }
        
        .folder-modal-content::-webkit-scrollbar-thumb:hover {
            background: #8a8d91;
        }
        
        .empty-folder {
            text-align: center;
            padding: 60px 20px;
            color: #65676b;
        }
        
        .empty-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            opacity: 0.5;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* Lesson Plans Grid */
        .lesson-plans-modal-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 16px;
        }
        
        .lesson-plan-modal-card {
            background: white;
            border: 1px solid #e4e6eb;
            padding: 20px;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        }
        
        .lesson-plan-modal-card:hover {
            border-color: #1877f2;
        }
        
        .modal-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
            gap: 10px;
        }
        
        .modal-card-title {
            font-weight: 600;
            font-size: 1.0625rem;
            color: #050505;
            cursor: pointer;
            line-height: 1.4;
            flex: 1;
            word-wrap: break-word;
        }
        
        .modal-card-title:hover {
            color: #1877f2;
        }
        
        .modal-card-status {
            flex-shrink: 0;
        }
        
        .auto-saved-badge {
            background: #42b72a;
            color: white;
            padding: 3px 8px;
            font-size: 0.6875rem;
            font-weight: 500;
        }
        
        .manual-saved-badge {
            background: #f7b928;
            color: white;
            padding: 3px 8px;
            font-size: 0.6875rem;
            font-weight: 500;
        }
        
        .modal-card-meta {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 12px;
            color: #65676b;
            font-size: 0.8125rem;
        }
        
        .modal-card-meta > div {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        
        .modal-card-preview {
            background: #f7f8fa;
            padding: 12px;
            margin-bottom: 16px;
            border-left: 3px solid #1877f2;
        }
        
        .modal-card-preview small {
            display: block;
            margin-bottom: 4px;
            color: #050505;
            font-weight: 500;
        }
        
        .modal-card-actions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        
        .modal-card-btn {
            padding: 8px 12px;
            border: none;
            cursor: pointer;
            font-size: 0.8125rem;
            font-weight: 500;
            transition: background 0.2s ease;
            display: flex;
            align-items: center;
            gap: 6px;
            flex: 1;
            justify-content: center;
            min-width: 70px;
        }
        
        .view-btn {
            background: #1877f2;
            color: white;
        }
        
        .view-btn:hover {
            background: #166fe5;
        }
        
        .edit-btn {
            background: #f7b928;
            color: white;
        }
        
        .edit-btn:hover {
            background: #e6a817;
        }
        
        .download-btn {
            background: #42b72a;
            color: white;
        }
        
        .download-btn:hover {
            background: #36a420;
        }
        
        .delete-btn {
            background: #e4405f;
            color: white;
        }
        
        .delete-btn:hover {
            background: #d02d4f;
        }
        
        /* Modal Footer */
        .folder-modal-footer {
            padding: 16px 24px;
            border-top: 1px solid #e4e6eb;
            background: white;
            flex-shrink: 0;
        }
        
        .modal-footer-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .modal-footer-btn {
            flex: 1;
            min-width: 140px;
            padding: 12px 16px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: background 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .create-new-btn {
            background: #42b72a;
            color: white;
        }
        
        .create-new-btn:hover {
            background: #36a420;
        }
        
        .secondary-btn {
            background: #e4e6eb;
            color: #050505;
        }
        
        .secondary-btn:hover {
            background: #d8dadf;
        }
        
        .danger-btn {
            background: #e4405f;
            color: white;
        }
        
        .danger-btn:hover {
            background: #d02d4f;
        }
        
        /* Back to Folder Button */
        .back-to-folder-btn {
            background: #e4e6eb;
            color: #050505;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-weight: 600;
            margin: 20px auto;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background 0.2s ease;
            max-width: 280px;
            justify-content: center;
        }
        
        .back-to-folder-btn:hover {
            background: #d8dadf;
        }
        
        /* Editing Banner */
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
            transition: background 0.2s ease;
        }
        
        .banner-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        /* Confirmation Modal */
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
            line-height: 1.5;
        }
        
        .confirmation-footer {
            padding: 16px 24px 20px;
            border-top: 1px solid #e4e6eb;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        /* Enhanced Notifications */
        .lesson-notification {
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 10001;
            min-width: 320px;
            padding: 14px 18px;
            animation: slideInRight 0.3s ease-out;
            font-weight: 500;
            font-size: 0.9375rem;
        }
        
        .notification-success {
            background: #42b72a;
            color: white;
        }
        
        .notification-error {
            background: #e4405f;
            color: white;
        }
        
        .notification-warning {
            background: #f7b928;
            color: white;
        }
        
        .notification-info {
            background: #1877f2;
            color: white;
        }
        
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
        
        .notification-message {
            flex: 1;
        }
        
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
            transition: background 0.2s ease;
        }
        
        .notification-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        /* Modal Buttons */
        .modal-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: background 0.2s ease;
            min-width: 90px;
        }
        
        .modal-btn-primary {
            background: #1877f2;
            color: white;
        }
        
        .modal-btn-primary:hover {
            background: #166fe5;
        }
        
        .modal-btn-secondary {
            background: #e4e6eb;
            color: #050505;
            border: 1px solid #ccd0d5;
        }
        
        .modal-btn-secondary:hover {
            background: #d8dadf;
        }
        
        .modal-btn-danger {
            background: #e4405f;
            color: white;
        }
        
        .modal-btn-danger:hover {
            background: #d02d4f;
        }
        
        .modal-btn-warning {
            background: #f7b928;
            color: white;
        }
        
        .modal-btn-warning:hover {
            background: #e6a817;
        }
        
        /* Save Button Styles */
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
        
        .save-lesson-btn:hover {
            background: #36a420;
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
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
        
        @keyframes modalScaleIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(80px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .folder-toggle-btn {
                position: relative;
                top: auto;
                right: auto;
                display: block;
                width: fit-content;
                margin: 10px auto;
            }
            
            .folder-modal {
                width: 100%;
                max-height: 100vh;
                margin: 0;
            }
            
            .folder-modal-header {
                padding: 14px 16px;
            }
            
            .folder-modal-title h2 {
                font-size: 1.125rem;
            }
            
            .folder-modal-content {
                padding: 16px;
            }
            
            .lesson-plans-modal-grid {
                grid-template-columns: 1fr;
                gap: 14px;
            }
            
            .lesson-plan-modal-card {
                padding: 16px;
            }
            
            .modal-card-actions {
                gap: 6px;
            }
            
            .modal-card-btn {
                padding: 7px 10px;
                font-size: 0.75rem;
            }
            
            .lesson-notification {
                right: 10px;
                left: 10px;
                min-width: auto;
                top: 10px;
            }
            
            .confirmation-modal {
                width: 95%;
                margin: 20px;
            }
            
            .confirmation-footer {
                flex-direction: column;
            }
            
            .modal-btn {
                width: 100%;
            }
            
            .modal-footer-actions {
                flex-direction: column;
            }
            
            .modal-footer-btn {
                min-width: auto;
            }
        }
        
        @media (max-width: 480px) {
            .folder-modal-header {
                padding: 12px 14px;
            }
            
            .folder-modal-title h2 {
                font-size: 1rem;
            }
            
            .folder-modal-content {
                padding: 14px;
            }
            
            .lesson-plan-modal-card {
                padding: 14px;
            }
            
            .modal-card-title {
                font-size: 0.9375rem;
            }
            
            .empty-folder {
                padding: 40px 15px;
            }
            
            .empty-icon {
                font-size: 3rem;
            }
            
            .folder-btn {
                width: 32px;
                height: 32px;
                font-size: 1rem;
            }
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
        // Error handling
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
        // Error handling
    }
}

function addLessonViewModalStyles() {
    if (document.querySelector('#lessonViewModalStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'lessonViewModalStyles';
    style.textContent = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
        
        /* Lesson View Modal Overlay */
        .lesson-view-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
            animation: fadeIn 0.2s ease-out;
            padding: 20px;
            box-sizing: border-box;
        }
        
        /* Lesson View Modal */
        .lesson-view-modal {
            background: #ffffff;
            width: 100%;
            max-width: 1000px;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        /* Modal Header */
        .lesson-view-modal-header {
            background: #1877f2;
            color: white;
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .lesson-view-title {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
            min-width: 0;
        }
        
        .lesson-view-title h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
            word-wrap: break-word;
            line-height: 1.4;
        }
        
        .lesson-icon {
            font-size: 1.5rem;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .lesson-view-actions {
            display: flex;
            gap: 8px;
            flex-shrink: 0;
        }
        
        .lesson-view-btn {
            padding: 8px 16px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            cursor: pointer;
            transition: background 0.2s ease;
            font-size: 0.875rem;
            font-weight: 500;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        
        .lesson-view-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .lesson-view-btn.close-btn {
            background: transparent;
            border: 1px solid transparent;
            padding: 8px;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .lesson-view-btn.close-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }
        
        /* Modal Content */
        .lesson-view-content {
            flex: 1;
            overflow-y: auto;
            padding: 24px;
            background: #f0f2f5;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
        }
        
        .lesson-view-content::-webkit-scrollbar {
            width: 8px;
        }
        
        .lesson-view-content::-webkit-scrollbar-track {
            background: #e4e6eb;
        }
        
        .lesson-view-content::-webkit-scrollbar-thumb {
            background: #bcc0c4;
        }
        
        .lesson-view-content::-webkit-scrollbar-thumb:hover {
            background: #8a8d91;
        }
        
        /* Style the lesson content inside modal */
        .lesson-view-content h1,
        .lesson-view-content h2,
        .lesson-view-content h3 {
            color: #050505;
            margin-bottom: 12px;
            margin-top: 20px;
            font-weight: 600;
        }
        
        .lesson-view-content h1:first-child,
        .lesson-view-content h2:first-child {
            margin-top: 0;
        }
        
        .lesson-view-content p {
            margin-bottom: 12px;
            color: #1c1e21;
        }
        
        .lesson-view-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            background: white;
            overflow: hidden;
        }
        
        .lesson-view-content th,
        .lesson-view-content td {
            padding: 12px 16px;
            border-bottom: 1px solid #e4e6eb;
            text-align: left;
        }
        
        .lesson-view-content th {
            background: #f7f8fa;
            font-weight: 600;
            color: #050505;
        }
        
        .lesson-view-content tr:last-child td {
            border-bottom: none;
        }
        
        .lesson-view-content strong {
            color: #050505;
            font-weight: 600;
        }
        
        /* Modal Footer */
        .lesson-view-footer {
            padding: 16px 24px;
            border-top: 1px solid #e4e6eb;
            background: white;
            flex-shrink: 0;
        }
        
        .lesson-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 16px;
            color: #65676b;
            font-size: 0.875rem;
            flex-wrap: wrap;
            align-items: center;
        }
        
        .lesson-meta > div {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        
        .lesson-footer-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        .lesson-footer-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9375rem;
            transition: background 0.2s ease;
            min-width: 100px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        
        .lesson-footer-btn.primary-btn {
            background: #1877f2;
            color: white;
        }
        
        .lesson-footer-btn.primary-btn:hover {
            background: #166fe5;
        }
        
        .lesson-footer-btn.secondary-btn {
            background: #e4e6eb;
            color: #050505;
        }
        
        .lesson-footer-btn.secondary-btn:hover {
            background: #d8dadf;
        }
        
        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
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
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .lesson-view-modal-overlay {
                padding: 0;
                align-items: flex-end;
            }
            
            .lesson-view-modal {
                max-height: 95vh;
                width: 100%;
            }
            
            .lesson-view-modal-header {
                padding: 14px 16px;
            }
            
            .lesson-view-title h2 {
                font-size: 1.125rem;
            }
            
            .lesson-view-content {
                padding: 16px;
            }
            
            .lesson-view-footer {
                padding: 14px 16px;
            }
            
            .lesson-footer-actions {
                flex-direction: column;
            }
            
            .lesson-footer-btn {
                width: 100%;
                min-width: auto;
            }
            
            .lesson-meta {
                flex-direction: column;
                gap: 8px;
                align-items: flex-start;
            }
        }
        
        @media (max-width: 480px) {
            .lesson-view-modal-header {
                padding: 12px 14px;
            }
            
            .lesson-view-title h2 {
                font-size: 1rem;
            }
            
            .lesson-view-content {
                padding: 14px;
                font-size: 0.9375rem;
            }
            
            .lesson-view-btn {
                padding: 6px 12px;
                font-size: 0.8125rem;
            }
            
            .lesson-footer-btn {
                padding: 9px 16px;
                font-size: 0.875rem;
            }
        }
    `;
    
    document.head.appendChild(style);
}

function initializePersistentStorage() {
    try {
        if (typeof(Storage) !== "undefined") {
            if (!localStorage.getItem('lessonPlanFolder')) {
                localStorage.setItem('lessonPlanFolder', JSON.stringify([]));
            }
            
            const stored = localStorage.getItem('lessonPlanFolder');
            window.onlineLessonFolder = JSON.parse(stored || '[]');
            
            showLessonNotification("Persistent storage enabled - your lessons will be saved", "success");
        } else {
            window.onlineLessonFolder = [];
            showLessonNotification("Using temporary storage - lessons won't persist after browser closes", "warning");
        }
    } catch (error) {
        window.onlineLessonFolder = [];
        showLessonNotification("Persistent storage failed, using temporary storage", "error");
    }
}

function initializeLessonPlanFolder() {
    initializePersistentStorage();
    
    if (!document.getElementById('lessonPlanFolderModal')) {
        createFolderModal();
    }
    
    addFolderSystemStyles();
    setupAutoSaveSystem();
}

function initializeLessonPlanFolderSystem() {
    try {
        initializePersistentStorage();
        
        initializeLessonPlanFolder();
        addFolderToggleButton();
        setupAutoSaveSystem();
        enhanceExistingFormSubmission();
        
        const savedPlans = getSavedLessonPlans();
        if (savedPlans.length > 0) {
            showLessonNotification(`Found ${savedPlans.length} saved lesson plan(s) - Auto-save enabled`, "success");
        } else {
            showLessonNotification("Lesson Plan Folder System ready with permanent storage", "success");
        }
        
    } catch (error) {
        showLessonNotification("Failed to initialize folder system", "error");
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLessonPlanFolderSystem);
} else {
    initializeLessonPlanFolderSystem();
}
