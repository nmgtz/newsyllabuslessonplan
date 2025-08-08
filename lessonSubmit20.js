
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
            if (!field.value.trim()) {
                this.showError(field, `This field is required`);
                isValid = false;
            } else {
                this.clearError(field);
            }
        });

        // Additional validation for step 4 (students)
        if (step === 4) {
            const femaleReg = parseInt(document.getElementById('femaleReg').value) || 0;
            const maleReg = parseInt(document.getElementById('maleReg').value) || 0;
            const femalePres = parseInt(document.getElementById('femalePres').value) || 0;
            const malePres = parseInt(document.getElementById('malePres').value) || 0;

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
        const hourCodes = document.getElementById("hourCodes")?.value;
        const minCodes = document.getElementById("minCodes")?.value;
        const school = document.getElementById("school")?.value;
        const teacherName = document.getElementById("teacherName")?.value;
        const date = document.getElementById("date")?.value;
        const subject = document.getElementById("subject")?.value;
        const classes = document.getElementById("classes")?.value;
        const streams = document.getElementById("streams")?.value;
        const period = document.getElementById("period")?.value;
        const femaleReg = document.getElementById("femaleReg")?.value;
        const maleReg = document.getElementById("maleReg")?.value;
        const femalePres = document.getElementById("femalePres")?.value;
        const malePres = document.getElementById("malePres")?.value;
        const specificLesson = document.getElementById("specificLesson")?.value;
        const tlmaterials = document.getElementById("tlmaterials")?.value;
        const wrdImp1 = document.getElementById("wrdImp1")?.value;
        const wrdImp2 = document.getElementById("wrdImp2")?.value;

        if (
            !hourCodes || !minCodes || !school || !teacherName || !date || !subject || !classes || 
            !streams || !period || !femaleReg || !maleReg || !femalePres || !malePres || 
            !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2
        ) {
            return false; 
        }
        return true; 
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
    const hourCodes = document.getElementById("hourCodes").value;
    const minCodes = document.getElementById("minCodes").value;
    const school = document.getElementById("school").value;
    const teacherName = document.getElementById("teacherName").value;
    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const classes = document.getElementById("classes").value;
    const streams = document.getElementById("streams").value;
    const period = document.getElementById("period").value;
    const femaleReg = document.getElementById("femaleReg").value;
    const maleReg = document.getElementById("maleReg").value;
    const femalePres = document.getElementById("femalePres").value;
    const malePres = document.getElementById("malePres").value;
    const specificLesson = document.getElementById("specificLesson").value;
    const tlmaterials = document.getElementById("tlmaterials").value;
    const wrdImp1 = document.getElementById("wrdImp1").value;
    const wrdImp2 = document.getElementById("wrdImp2").value;

    if (
        !hourCodes || !minCodes || !school || !teacherName || !date || !subject || !classes || 
        !streams || !period || !femaleReg || !maleReg || !femalePres || !malePres || 
        !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2
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
    // Remove existing modal if any
    const existingModal = document.querySelector('.document-name-modal');
    if (existingModal) existingModal.remove();
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'document-name-modal-overlay';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'document-name-modal';
    modal.innerHTML = `
        <div class="modal-header">
            <h3>📄 Save Lesson Plan</h3>
        </div>
        <div class="modal-body">
            <label for="documentNameInput">WEKA JINA LA LESSON PLAN (Mfano: Mr. nmgai subject topic 1)</label>
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
    
    // Focus on input and select text
    setTimeout(() => {
        const input = document.getElementById('documentNameInput');
        input.focus();
        input.select();
    }, 100);
    
    // Store callback for later use
    window.documentNameCallback = callback;
    
    // Handle Enter key
    document.getElementById('documentNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            confirmDocumentName();
        }
    });
    
    // Handle Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDocumentNameModal();
        }
    });
    
    // Add modal styles
    addDocumentNameModalStyles();
}

function confirmDocumentName() {
    const input = document.getElementById('documentNameInput');
    const documentName = input.value || input.placeholder;
    
    // Call the callback with the document name
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
    // Check if styles already exist
    if (document.querySelector('#documentNameModalStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'documentNameModalStyles';
    style.textContent = `
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
            backdrop-filter: blur(3px);
        }
        
        .document-name-modal {
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-header {
            padding: 20px 24px 16px;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1f2937;
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .modal-body {
            padding: 24px;
        }
        
        .modal-body label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #374151;
            font-size: 0.95rem;
        }
        
        .document-name-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.2s ease;
            box-sizing: border-box;
        }
        
        .document-name-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .input-hint {
            margin-top: 8px;
            font-size: 0.875rem;
            color: #6b7280;
            font-style: italic;
        }
        
        .modal-footer {
            padding: 16px 24px 24px;
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            font-size: 0.95rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            min-width: 80px;
        }
        
        .cancel-btn {
            background-color: #f3f4f6;
            color: #374151;
        }
        
        .cancel-btn:hover {
            background-color: #e5e7eb;
        }
        
        .confirm-btn {
            background-color: #3b82f6;
            color: white;
        }
        
        .confirm-btn:hover {
            background-color: #2563eb;
        }
        
        .modal-btn:active {
            transform: translateY(1px);
        }
        
        /* Mobile responsive */
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


// 📁 COMPLETE LESSON PLAN FOLDER SYSTEM WITH DOWNLOAD INTEGRATION
function initializeLessonPlanFolder() {
    // Create folder view container if it doesn't exist
    if (!document.getElementById('lessonPlanFolder')) {
        createFolderViewContainer();
    }
    displayFolderContents();
    addFolderSystemStyles();
}

// 📁 Create folder view container
function createFolderViewContainer() {
    const container = document.querySelector('.container') || document.body;
    
    const folderHTML = `
        <div id="lessonPlanFolder" class="lesson-folder-container" style="display: none;">
            <div class="folder-header">
                <div class="folder-title">
                    <span class="folder-icon">📁</span>
                    <h2>My Lesson Plans</h2>
                    <span class="folder-count" id="folderCount">(0)</span>
                </div>
                <div class="folder-actions">
                    <button class="folder-btn sort-btn" onclick="sortLessonPlans('date')">📅 Sort by Date</button>
                    <button class="folder-btn sort-btn" onclick="sortLessonPlans('name')">🔤 Sort by Name</button>
                    <button class="folder-btn collapse-btn" onclick="toggleFolderView()">📂 Collapse</button>
                </div>
            </div>
            <div class="folder-content" id="folderContent">
                <div class="empty-folder" id="emptyFolder">
                    <div class="empty-icon">📄</div>
                    <p>No saved lesson plans yet</p>
                    <small>Create your first lesson plan to get started!</small>
                </div>
            </div>
        </div>
    `;
    
    // Insert at the beginning of container
    container.insertAdjacentHTML('afterbegin', folderHTML);
}

// 📋 Display all saved lesson plans
function displayFolderContents() {
    const folderContent = document.getElementById('folderContent');
    const emptyFolder = document.getElementById('emptyFolder');
    const folderCount = document.getElementById('folderCount');
    
    if (!folderContent) return;
    
    const savedPlans = getSavedLessonPlans();
    
    if (savedPlans.length === 0) {
        emptyFolder.style.display = 'block';
        folderCount.textContent = '(0)';
        return;
    }
    
    emptyFolder.style.display = 'none';
    folderCount.textContent = `(${savedPlans.length})`;
    
    let planListHTML = '<div class="lesson-plans-grid">';
    
    savedPlans.forEach((plan, index) => {
        const planDate = new Date(plan.date).toLocaleDateString();
        const saveTime = new Date(plan.timestamp).toLocaleString();
        
        planListHTML += `
            <div class="lesson-plan-card" data-index="${index}">
                <div class="card-header">
                    <div class="card-title" onclick="loadLessonPlan('${plan.name}')">
                        📄 ${plan.name}
                    </div>
                    <div class="card-menu">⋯</div>
                </div>
                <div class="card-meta">
                    <small>📅 ${planDate}</small>
                    <small>💾 ${saveTime}</small>
                </div>
                <div class="card-preview">
                    <small><strong>Subject:</strong> ${plan.data.subject || 'N/A'}</small>
                    <small><strong>Class:</strong> ${plan.data.classes || 'N/A'}</small>
                </div>
                <div class="card-actions">
                    <button class="card-btn edit-btn" onclick="editLessonPlan('${plan.name}')">
                        ✏️ Edit
                    </button>
                    <button class="card-btn download-btn" onclick="downloadSavedPlan('${plan.name}')">
                        📥 Download
                    </button>
                    <button class="card-btn delete-btn" onclick="deleteLessonPlan('${plan.name}')">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;
    });
    
    planListHTML += '</div>';
    folderContent.innerHTML = planListHTML;
}

// Enhanced save function that integrates with your existing form submission
function saveLessonPlanToFolder() {
    if (!validateFields()) {
        showLessonNotification("Please fill all required fields before saving.", "error");
        return false;
    }
    
    const formData = getCurrentFormData();
    const lessonName = generateLessonName(formData);
    
    // Check if lesson already exists
    const existingPlans = getSavedLessonPlans();
    const existingPlan = existingPlans.find(plan => plan.name === lessonName);
    
    if (existingPlan) {
        showOverwriteConfirmation(lessonName, formData);
        return false;
    }
    
    // Save new lesson plan
    saveNewLessonPlan(lessonName, formData);
    return true;
}

//  Get current form data
function getCurrentFormData() {
    const form = document.getElementById('lessonPlanForm');
    const formData = {};
    
    // Get all form elements
    const elements = form.querySelectorAll('input, select, textarea');
    elements.forEach(element => {
        if (element.id || element.name) {
            const key = element.id || element.name;
            formData[key] = element.value;
        }
    });
    
    return formData;
}

// 🏷Generate unique lesson name
function generateLessonName(formData) {
    const subject = formData.subject || 'Subject';
    const specificLesson = formData.specificLesson || 'Lesson';
    const date = formData.date || new Date().toISOString().split('T')[0];
    
    return `${subject} - ${specificLesson} (${date})`;
}

// Save new lesson plan
function saveNewLessonPlan(name, formData) {
    const lessonPlan = {
        name: name,
        data: formData,
        date: formData.date || new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString()
    };
    
    const savedPlans = getSavedLessonPlans();
    savedPlans.push(lessonPlan);
    
    // Use in-memory storage
    window.onlineLessonFolder = savedPlans;
    
    showLessonNotification("✅ Lesson plan saved successfully!", "success");
    displayFolderContents();
    showFolderView();
}

// Get saved lesson plans (using in-memory storage)
function getSavedLessonPlans() {
    return window.onlineLessonFolder || [];
}

// Show overwrite confirmation
function showOverwriteConfirmation(lessonName, formData) {
    showLessonModal({
        title: "⚠️ Lesson Plan Exists",
        message: `A lesson plan with the name "${lessonName}" already exists. Do you want to overwrite it?`,
        buttons: [
            {
                text: "Cancel",
                class: "modal-btn-secondary",
                onclick: "closeLessonModal()"
            },
            {
                text: "Overwrite",
                class: "modal-btn-danger",
                onclick: `overwriteLessonPlan('${lessonName}', ${JSON.stringify(formData).replace(/'/g, "\\'")})`
            }
        ]
    });
}

//Overwrite existing lesson plan
function overwriteLessonPlan(name, formData) {
    const savedPlans = getSavedLessonPlans();
    const existingIndex = savedPlans.findIndex(plan => plan.name === name);
    
    if (existingIndex !== -1) {
        savedPlans[existingIndex] = {
            name: name,
            data: formData,
            date: formData.date || new Date().toISOString().split('T')[0],
            timestamp: new Date().toISOString()
        };
        
        window.onlineLessonFolder = savedPlans;
        showLessonNotification("✅ Lesson plan updated successfully!", "success");
        displayFolderContents();
        closeLessonModal();
    }
}

// Enhanced edit lesson plan - loads data and shows download option
function editLessonPlan(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const plan = savedPlans.find(p => p.name === lessonName);
    
    if (!plan) {
        showLessonNotification("❌ Lesson plan not found!", "error");
        return;
    }
    
    // Load data into form
    loadDataIntoForm(plan.data);
    
    // Show editing banner
    showEditingBanner(lessonName);
    
    // Hide folder view and show form
    hideFolderView();
    showLessonForm();
    
    // Trigger your existing updateContent function to populate the lesson template
    if (typeof updateContent === 'function') {
        updateContent();
    }
    
    // Show the lesson template and download options
    showLessonTemplateWithDownload();
    
    // Scroll to form
    document.getElementById('lessonPlanForm').scrollIntoView({ behavior: 'smooth' });
    
    showLessonNotification(`✏️ Now editing: ${lessonName}`, "info");
}

// 📄 Enhanced load lesson plan - shows lesson template with your download system
function loadLessonPlan(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const plan = savedPlans.find(p => p.name === lessonName);
    
    if (!plan) {
        showLessonNotification("❌ Lesson plan not found!", "error");
        return;
    }
    
    // Load data into form (but keep it hidden)
    loadDataIntoFormSilently(plan.data);
    
    // Trigger your existing updateContent function
    if (typeof updateContent === 'function') {
        updateContent();
    }
    
    // Hide folder view
    hideFolderView();
    
    // Hide the form but show the lesson template
    hideLessonForm();
    showLessonTemplateWithDownload();
    
    // Add a "Back to Saved Plans" button
    addBackToFolderButton();
    
    showLessonNotification(`📖 Opened: ${lessonName}`, "success");
}

// Load data into form
function loadDataIntoForm(data) {
    const form = document.getElementById('lessonPlanForm');
    
    Object.keys(data).forEach(key => {
        const element = document.getElementById(key) || form.querySelector(`[name="${key}"]`);
        if (element && data[key]) {
            element.value = data[key];
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
}

// Load data silently (without showing form)
function loadDataIntoFormSilently(data) {
    const form = document.getElementById('lessonPlanForm');
    
    Object.keys(data).forEach(key => {
        const element = document.getElementById(key) || form.querySelector(`[name="${key}"]`);
        if (element && data[key]) {
            element.value = data[key];
            // Don't dispatch change events to avoid side effects
        }
    });
}

// 👁️ Show lesson template with your download system
function showLessonTemplateWithDownload() {
    // Show the lesson template
    const lessonTemp = document.getElementById('lessonTemp');
    if (lessonTemp) {
        lessonTemp.style.display = 'block';
        lessonTemp.style.visibility = 'visible';
    }
    
    // Show lesson content areas
    const lessonContent = document.querySelectorAll('.lesson-content, .lesson-template');
    lessonContent.forEach(content => {
        content.style.display = 'block';
        content.style.visibility = 'visible';
    });
    
    // Add your existing download button if it doesn't exist
    if (!document.getElementById('downloadPdfBtn')) {
        addYourDownloadButton();
    } else {
        // Show existing download button
        document.getElementById('downloadPdfBtn').style.display = 'block';
    }
    
    // Add additional action buttons
    addLessonViewActionButtons();
}

// Add your existing download button
function addYourDownloadButton() {
    const container = document.querySelector('.container');
    const existingBtnContainer = document.querySelector('.button-container');
    
    if (existingBtnContainer) {
        // Use existing button container
        const downloadBtn = document.createElement('button');
        downloadBtn.id = 'downloadPdfBtn';
        downloadBtn.className = 'action-button primary-btn';
        downloadBtn.innerHTML = `
            <span class="btn-icon">📥</span>
            Download PDF
        `;
        downloadBtn.onclick = downloadDocument; // Use your existing function
        existingBtnContainer.appendChild(downloadBtn);
    } else {
        // Create new button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        buttonContainer.innerHTML = `
            <button id="downloadPdfBtn" class="action-button primary-btn" onclick="downloadDocument()">
                <span class="btn-icon">📥</span>
                Download PDF
            </button>
        `;
        
        // Insert after lesson template
        const lessonTemp = document.getElementById('lessonTemp');
        if (lessonTemp) {
            lessonTemp.insertAdjacentElement('afterend', buttonContainer);
        } else {
            container.appendChild(buttonContainer);
        }
    }
}

// Add action buttons for lesson view
function addLessonViewActionButtons() {
    // Remove existing action buttons
    document.querySelectorAll('.lesson-view-actions').forEach(btn => btn.remove());
    
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'lesson-view-actions';
    actionsContainer.innerHTML = `
        <div class="lesson-actions-bar">
            <button class="lesson-action-btn back-btn" onclick="backToFolderFromView()">
                <span>🔙</span> Back to Saved Plans
            </button>
            <button class="lesson-action-btn edit-btn" onclick="editCurrentLessonPlan()">
                <span>✏️</span> Edit This Plan
            </button>
            <button class="lesson-action-btn new-btn" onclick="createNewLessonPlan()">
                <span>➕</span> Create New Plan
            </button>
        </div>
    `;
    
    // Insert before the lesson template
    const lessonTemp = document.getElementById('lessonTemp');
    if (lessonTemp) {
        lessonTemp.insertAdjacentElement('beforebegin', actionsContainer);
    } else {
        document.querySelector('.container').appendChild(actionsContainer);
    }
    
    // Add styles for action buttons
    addLessonViewStyles();
}

//  Show editing banner
function showEditingBanner(lessonName) {
    let banner = document.querySelector('.editing-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.className = 'editing-banner';
        const form = document.getElementById('lessonPlanForm');
        form.insertBefore(banner, form.firstChild);
    }
    
    banner.innerHTML = `
        <div class="banner-content">
            <span>✏️ Currently editing: <strong>${lessonName}</strong></span>
            <button onclick="hideEditingBanner()" class="banner-close">×</button>
        </div>
    `;
    banner.style.display = 'block';
}

//  Hide editing banner
function hideEditingBanner() {
    const banner = document.querySelector('.editing-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

//  Back to folder from lesson view
function backToFolderFromView() {
    // Hide lesson template and actions
    hideLessonTemplate();
    document.querySelectorAll('.lesson-view-actions').forEach(btn => btn.remove());
    
    // Show folder view
    showFolderView();
    displayFolderContents();
    
    showLessonNotification("📁 Returned to saved plans", "info");
}

//Edit current lesson plan
function editCurrentLessonPlan() {
    // Show the form
    showLessonForm();
    
    // Show editing banner (get name from current data)
    const subject = document.getElementById('subject')?.value || 'Subject';
    const specificLesson = document.getElementById('specificLesson')?.value || 'Lesson';
    const date = document.getElementById('date')?.value || new Date().toISOString().split('T')[0];
    const lessonName = `${subject} - ${specificLesson} (${date})`;
    
    showEditingBanner(lessonName);
    
    // Scroll to form
    document.getElementById('lessonPlanForm').scrollIntoView({ behavior: 'smooth' });
    
    showLessonNotification("✏️ Now editing lesson plan", "info");
}

// ➕ Create new lesson plan
function createNewLessonPlan() {
    // Reset form
    const form = document.getElementById('lessonPlanForm');
    if (form) {
        form.reset();
        
        // Set today's date
        const today = new Date().toISOString().split('T')[0];
        const dateField = document.getElementById('date');
        if (dateField) {
            dateField.value = today;
        }
    }
    
    // Hide lesson template
    hideLessonTemplate();
    
    // Show form
    showLessonForm();
    
    // Hide folder view
    hideFolderView();
    
    // Remove action buttons
    document.querySelectorAll('.lesson-view-actions').forEach(btn => btn.remove());
    
    // Hide editing banner
    hideEditingBanner();
    
    // Reset lesson plan form instance if it exists
    if (window.lessonPlanFormInstance) {
        window.lessonPlanFormInstance.currentStep = 1;
        window.lessonPlanFormInstance.updateStep();
    }
    
    showLessonNotification("📝 Started new lesson plan", "success");
}

//  Enhanced download saved plan - uses your existing system
function downloadSavedPlan(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const plan = savedPlans.find(p => p.name === lessonName);
    
    if (!plan) {
        showLessonNotification("❌ Lesson plan not found!", "error");
        return;
    }
    
    // Load the plan data silently
    loadDataIntoFormSilently(plan.data);
    
    // Update the lesson template with the data
    if (typeof updateContent === 'function') {
        updateContent();
    }
    
    // Small delay to ensure content is updated, then download
    setTimeout(() => {
        // Use your existing download function
        if (typeof downloadDocument === 'function') {
            downloadDocument();
        } else {
            showLessonNotification("❌ Download system not available", "error");
        }
    }, 500);
    
    showLessonNotification(`📥 Downloading: ${lessonName}`, "info");
}

//  Delete lesson plan
function deleteLessonPlan(lessonName) {
    showLessonModal({
        title: "🗑️ Delete Lesson Plan",
        message: `Are you sure you want to delete "${lessonName}"? This action cannot be undone.`,
        buttons: [
            {
                text: "Cancel",
                class: "modal-btn-secondary",
                onclick: "closeLessonModal()"
            },
            {
                text: "Delete",
                class: "modal-btn-danger",
                onclick: `confirmDeleteLessonPlan('${lessonName}')`
            }
        ]
    });
}

//  Confirm delete lesson plan
function confirmDeleteLessonPlan(lessonName) {
    const savedPlans = getSavedLessonPlans();
    const newPlans = savedPlans.filter(plan => plan.name !== lessonName);
    
    window.onlineLessonFolder = newPlans;
    
    displayFolderContents();
    closeLessonModal();
    showLessonNotification("🗑️ Lesson plan deleted successfully!", "success");
}

//  Toggle folder view
function toggleFolderView() {
    const folder = document.getElementById('lessonPlanFolder');
    const folderContent = document.querySelector('.folder-content');
    const toggleBtn = document.querySelector('.collapse-btn');
    
    if (folderContent.style.display === 'none') {
        folderContent.style.display = 'block';
        toggleBtn.innerHTML = '📂 Collapse';
    } else {
        folderContent.style.display = 'none';
        toggleBtn.innerHTML = '📂 Expand';
    }
}

//  Sort lesson plans
function sortLessonPlans(sortBy) {
    const savedPlans = getSavedLessonPlans();
    
    if (sortBy === 'date') {
        savedPlans.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'name') {
        savedPlans.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    window.onlineLessonFolder = savedPlans;
    displayFolderContents();
    
    showLessonNotification(`📊 Sorted by ${sortBy}`, "info");
}

// Show/Hide functions
function showFolderView() {
    document.getElementById('lessonPlanFolder').style.display = 'block';
}

function hideFolderView() {
    document.getElementById('lessonPlanFolder').style.display = 'none';
}

function showLessonForm() {
    const form = document.getElementById('lessonPlanForm');
    if (form) {
        form.style.display = 'block';
    }
    
    // Show form containers
    const formContainers = document.querySelectorAll('.form-section, .input-group, .form-container, .lesson-form');
    formContainers.forEach(container => {
        container.style.display = 'block';
    });
}

//  Hide lesson form
function hideLessonForm() {
    const form = document.getElementById('lessonPlanForm');
    if (form) {
        form.style.display = 'none';
    }
    
    // Hide form containers
    const formContainers = document.querySelectorAll('.form-section, .input-group, .form-container, .lesson-form');
    formContainers.forEach(container => {
        container.style.display = 'none';
    });
}

//  Hide lesson template
function hideLessonTemplate() {
    const lessonTemp = document.getElementById('lessonTemp');
    if (lessonTemp) {
        lessonTemp.style.display = 'none';
    }
    
    const lessonContent = document.querySelectorAll('.lesson-content, .lesson-template');
    lessonContent.forEach(content => {
        content.style.display = 'none';
    });
    
    // Hide download button
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }
}

//  Enhanced notification system
function showLessonNotification(message, type = "info") {
    // Remove existing notifications
    document.querySelectorAll('.lesson-notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `lesson-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 4000);
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        success: "✅",
        error: "❌", 
        warning: "⚠️",
        info: "ℹ️"
    };
    return icons[type] || icons.info;
}

//  Modal system
function showLessonModal({ title, message, content, buttons }) {
    // Remove existing modal
    closeLessonModal();
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'lesson-modal-overlay';
    modalOverlay.id = 'lessonModal';
    
    let modalContent = `
        <div class="lesson-modal">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="closeLessonModal()">×</button>
            </div>
            <div class="modal-body">
    `;
    
    if (message) {
        modalContent += `<p>${message}</p>`;
    }
    
    if (content) {
        modalContent += content;
    }
    
    modalContent += `</div><div class="modal-footer">`;
    
    buttons.forEach(button => {
        modalContent += `<button class="modal-btn ${button.class}" onclick="${button.onclick}">${button.text}</button>`;
    });
    
    modalContent += `</div></div>`;
    
    modalOverlay.innerHTML = modalContent;
    document.body.appendChild(modalOverlay);
}

//  Close modal
function closeLessonModal() {
    const modal = document.getElementById('lessonModal');
    if (modal) {
        modal.remove();
    }
}

// 🏷 Get field label (enhance your existing function)
function getFieldLabel(fieldName) {
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
    
    return labelMap[fieldName] || fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

//  Add folder toggle button to your existing interface
function addFolderToggleButton() {
    const container = document.querySelector('.container');
    if (!container || document.getElementById('folderToggleBtn')) return;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'folderToggleBtn';
    toggleBtn.className = 'folder-toggle-btn';
    toggleBtn.innerHTML = '📁 My Lesson Plans';
    toggleBtn.onclick = () => {
        const folder = document.getElementById('lessonPlanFolder');
        if (folder.style.display === 'none' || !folder.style.display) {
            showFolderView();
            displayFolderContents();
        } else {
            hideFolderView();
        }
    };
    
    container.insertAdjacentElement('afterbegin', toggleBtn);
}

//  Enhanced integration with your existing form submission
function enhanceExistingSubmission() {
    const originalSubmitHandler = window.lessonplanSubmit;
    
    // Override the existing submit button click handler
    const submitBtn = document.getElementById('submit-lesson-plan');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Save to folder first
            const saved = saveLessonPlanToFolder();
            
            if (saved) {
                // Continue with original submission logic
                if (originalSubmitHandler) {
                    originalSubmitHandler.call(this, e);
                } else {
                    // Your existing submission logic
                    updateContent();
                    // ... rest of your existing code
                }
            }
        });
    }
}

//  Enhanced integration with your existing system
function enhanceExistingDownloadIntegration() {
    // Store reference to your original download function
    if (typeof downloadDocument === 'function') {
        window.originalDownloadDocument = downloadDocument;
        
        // Override to work with lesson names
        window.downloadDocument = function() {
            // Get current lesson data for naming
            const subject = document.getElementById('subject')?.value || 'Lesson';
            const specificLesson = document.getElementById('specificLesson')?.value || 'Plan';
            const date = document.getElementById('date')?.value || new Date().toISOString().split('T')[0];
            
            // Call your original function
            window.originalDownloadDocument();
        };
    }
}

//  Add styles for lesson view actions
function addLessonViewStyles() {
    if (document.querySelector('#lessonViewStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'lessonViewStyles';
    style.textContent = `
        .lesson-view-actions {
            margin: 20px auto;
            max-width: 1200px;
            padding: 0 20px;
        }
        
        .lesson-actions-bar {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border: 2px solid #e2e8f0;
        }
        
        .lesson-action-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            min-width: 140px;
            justify-content: center;
        }
        
        .lesson-action-btn span {
            font-size: 1.1rem;
        }
        
        .back-btn {
            background: linear-gradient(135deg, #6b7280, #4b5563);
            color: white;
        }
        
        .back-btn:hover {
            background: linear-gradient(135deg, #4b5563, #374151);
            transform: translateY(-2px);
        }
        
        .edit-btn {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
        }
        
        .edit-btn:hover {
            background: linear-gradient(135deg, #d97706, #b45309);
            transform: translateY(-2px);
        }
        
        .new-btn {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
        }
        
        .new-btn:hover {
            background: linear-gradient(135deg, #059669, #047857);
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .lesson-actions-bar {
                flex-direction: column;
                padding: 15px;
            }
            
            .lesson-action-btn {
                width: 100%;
                min-width: auto;
            }
        }
    `;
    
    document.head.appendChild(style);
}

//  Add folder system styles
function addFolderSystemStyles() {
    if (document.querySelector('#folderSystemStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'folderSystemStyles';
    style.textContent = `
        .folder-toggle-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
            transition: all 0.3s ease;
        }
        
        .folder-toggle-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
        }
        
        .lesson-folder-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin: 20px auto;
            max-width: 1200px;
            overflow: hidden;
        }
        
        .folder-header {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .folder-title {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .folder-title h2 {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 600;
        }
        
        .folder-count {
            background: rgba(255,255,255,0.2);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .folder-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .folder-btn {
            padding: 8px 16px;
            border: 2px solid rgba(255,255,255,0.3);
            background: rgba(255,255,255,0.1);
            color: white;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .folder-btn:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
        
        .folder-content {
            padding: 30px;
        }
        
        .empty-folder {
            text-align: center;
            padding: 60px 20px;
            color: #6b7280;
        }
        
        .empty-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            opacity: 0.5;
        }
        
        .lesson-plans-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 25px;
        }
        
        .lesson-plan-card {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .lesson-plan-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            border-color: #4f46e5;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
        }
        
        .card-title {
            font-weight: 600;
            font-size: 1.1rem;
            color: #1f2937;
            cursor: pointer;
            line-height: 1.4;
            flex: 1;
        }
        
        .card-title:hover {
            color: #4f46e5;
        }
        
        .card-meta {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 15px;
            color: #6b7280;
        }
        
        .card-preview {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #4f46e5;
        }
        
        .card-preview small {
            display: block;
            margin-bottom: 5px;
            color: #374151;
        }
        
        .card-actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        
        .card-btn {
            padding: 8px 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .edit-btn {
            background: #f59e0b;
            color: white;
        }
        
        .edit-btn:hover {
            background: #d97706;
            transform: translateY(-1px);
        }
        
        .download-btn {
            background: #10b981;
            color: white;
        }
        
        .download-btn:hover {
            background: #059669;
            transform: translateY(-1px);
        }
        
        .delete-btn {
            background: #ef4444;
            color: white;
        }
        
        .delete-btn:hover {
            background: #dc2626;
            transform: translateY(-1px);
        }
        
        .editing-banner {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
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
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .banner-close:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .lesson-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            min-width: 350px;
            border-radius: 12px;
            padding: 16px 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            animation: slideInRight 0.4s ease-out;
            font-weight: 500;
        }
        
        .notification-success {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
        }
        
        .notification-error {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
        }
        
        .notification-warning {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
        }
        
        .notification-info {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        
        .notification-icon {
            font-size: 1.2rem;
        }
        
        .notification-message {
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.3rem;
            cursor: pointer;
            padding: 0;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .notification-close:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .lesson-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
        }
        
        .lesson-modal {
            background: white;
            border-radius: 15px;
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            animation: modalScaleIn 0.3s ease-out;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .modal-header {
            padding: 25px 30px 20px;
            border-bottom: 2px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1f2937;
            font-size: 1.4rem;
            font-weight: 600;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: #6b7280;
            padding: 0;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: #f3f4f6;
            color: #374151;
        }
        
        .modal-body {
            padding: 20px 30px;
            color: #374151;
            line-height: 1.6;
        }
        
        .modal-footer {
            padding: 20px 30px 25px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            min-width: 100px;
        }
        
        .modal-btn-primary {
            background: #4f46e5;
            color: white;
        }
        
        .modal-btn-primary:hover {
            background: #4338ca;
            transform: translateY(-1px);
        }
        
        .modal-btn-secondary {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
        }
        
        .modal-btn-secondary:hover {
            background: #e5e7eb;
        }
        
        .modal-btn-danger {
            background: #ef4444;
            color: white;
        }
        
        .modal-btn-danger:hover {
            background: #dc2626;
            transform: translateY(-1px);
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
        
        @keyframes modalScaleIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
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
            
            .lesson-folder-container {
                margin: 10px;
                border-radius: 12px;
            }
            
            .folder-header {
                padding: 20px;
                flex-direction: column;
                align-items: flex-start;
            }
            
            .folder-actions {
                width: 100%;
                justify-content: flex-start;
            }
            
            .folder-content {
                padding: 20px;
            }
            
            .lesson-plans-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .lesson-plan-card {
                padding: 18px;
            }
            
            .card-actions {
                justify-content: center;
            }
            
            .card-btn {
                flex: 1;
                justify-content: center;
                min-width: 90px;
            }
            
            .lesson-notification {
                right: 10px;
                left: 10px;
                min-width: auto;
            }
            
            .lesson-modal {
                width: 95%;
                margin: 20px;
                max-height: 85vh;
            }
            
            .modal-header, .modal-body, .modal-footer {
                padding-left: 20px;
                padding-right: 20px;
            }
            
            .modal-footer {
                flex-direction: column;
            }
            
            .modal-btn {
                width: 100%;
            }
        }
        
        @media (max-width: 480px) {
            .folder-header {
                padding: 15px;
            }
            
            .folder-title h2 {
                font-size: 1.5rem;
            }
            
            .folder-content {
                padding: 15px;
            }
            
            .lesson-plan-card {
                padding: 15px;
            }
            
            .card-title {
                font-size: 1rem;
            }
            
            .empty-folder {
                padding: 40px 15px;
            }
            
            .empty-icon {
                font-size: 3rem;
            }
        }
    `;
    
    document.head.appendChild(style);
}

//  Initialize everything when DOM is ready
function initializeLessonPlanFolderSystem() {
    // Initialize in-memory storage
    if (!window.onlineLessonFolder) {
        window.onlineLessonFolder = [];
    }
    
    // Initialize folder system
    initializeLessonPlanFolder();
    
    // Add folder toggle button
    addFolderToggleButton();
    
    // Enhance existing submission
    enhanceExistingSubmission();
    
    // Enhance existing download integration
    enhanceExistingDownloadIntegration();
    
    console.log('📁 Lesson Plan Folder System initialized successfully!');
}

//  Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLessonPlanFolderSystem);
} else {
    initializeLessonPlanFolderSystem();
}


