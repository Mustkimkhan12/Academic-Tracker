const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const modal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const studentName = document.getElementById('student-name');
const studentImage = document.getElementById('student-image');
const attendance = document.getElementById('attendance');
const courseCompletion = document.getElementById('course-completion');
const progress = document.getElementById('progress');
const rank = document.getElementById('rank');
const gpa = document.getElementById('gpa');
const gradeMarks = [
    document.getElementById('mark1'),
    document.getElementById('mark2'),
    document.getElementById('mark3'),
    document.getElementById('mark4'),
    document.getElementById('mark5'),
    document.getElementById('mark6'),
    document.getElementById('total-obtained')
];
const subjectCompletions = [
    document.getElementById('sub-completion1'),
    document.getElementById('sub-completion2'),
    document.getElementById('sub-completion3'),
    document.getElementById('sub-completion4'),
    document.getElementById('sub-completion5'),
    document.getElementById('sub-completion6')
];
const subProgressBars = [
    document.getElementById('sub-progress1'),
    document.getElementById('sub-progress2'),
    document.getElementById('sub-progress3'),
    document.getElementById('sub-progress4'),
    document.getElementById('sub-progress5'),
    document.getElementById('sub-progress6')
];

// Array of 72 students with unique IDs, names, ranks, and GPAs
const students = [
    { id: "STU001", name: "Mustkim Khan", rank: 1, gpa: 9.8 },
    { id: "STU002", name: "Adnan Khan", rank: 5, gpa: 9.2 },
    { id: "STU003", name: "Zaid Khan", rank: 12, gpa: 8.7 },
    { id: "STU004", name: "Faiz Rabbani", rank: 8, gpa: 9.0 },
    { id: "STU005", name: "Ateeq", rank: 3, gpa: 9.5 },
    { id: "STU006", name: "Hashmat", rank: 15, gpa: 8.4 },
    { id: "STU007", name: "Samarth Desai", rank: 20, gpa: 8.0 },
    { id: "STU008", name: "Dhruv Mehta", rank: 10, gpa: 8.9 },
    { id: "STU009", name: "Ishaan Kapoor", rank: 25, gpa: 7.8 },
    { id: "STU010", name: "Nivaan Malhotra", rank: 18, gpa: 8.2 },
    { id: "STU011", name: "Aayush Agarwal", rank: 7, gpa: 9.1 },
    { id: "STU012", name: "Kabir Yadav", rank: 30, gpa: 7.5 },
    { id: "STU013", name: "Rohan Mishra", rank: 14, gpa: 8.5 },
    { id: "STU014", name: "Saanvi Bansal", rank: 2, gpa: 9.7 },
    { id: "STU015", name: "Ananya Iyer", rank: 9, gpa: 9.0 },
    { id: "STU016", name: "Diya Nair", rank: 22, gpa: 7.9 },
    { id: "STU017", name: "Pihu Sharma", rank: 17, gpa: 8.3 },
    { id: "STU018", name: "Kavya Rao", rank: 28, gpa: 7.6 },
    { id: "STU019", name: "Sneha Das", rank: 11, gpa: 8.8 },
    { id: "STU020", name: "Tara Sen", rank: 35, gpa: 7.2 },
    { id: "STU021", name: "Myra Gupta", rank: 6, gpa: 9.3 },
    { id: "STU022", name: "Zara Khan", rank: 40, gpa: 6.9 },
    { id: "STU023", name: "Riya Jain", rank: 13, gpa: 8.6 },
    { id: "STU024", name: "Aisha Ali", rank: 33, gpa: 7.3 },
    { id: "STU025", name: "Kiara Chawla", rank: 4, gpa: 9.4 },
    { id: "STU026", name: "Neha Singh", rank: 27, gpa: 7.7 },
    { id: "STU027", name: "Priya Kumar", rank: 19, gpa: 8.1 },
    { id: "STU028", name: "Shreya Bose", rank: 36, gpa: 7.1 },
    { id: "STU029", name: "Anika Roy", rank: 16, gpa: 8.4 },
    { id: "STU030", name: "Tanvi Patel", rank: 31, gpa: 7.4 },
    { id: "STU031", name: "Meera Desai", rank: 23, gpa: 7.9 },
    { id: "STU032", name: "Lakshmi Iyer", rank: 42, gpa: 6.8 },
    { id: "STU033", name: "Aditi Sharma", rank: 26, gpa: 7.7 },
    { id: "STU034", name: "Siya Gupta", rank: 38, gpa: 7.0 },
    { id: "STU035", name: "Hridya Nair", rank: 21, gpa: 8.0 },
    { id: "STU036", name: "Vidya Rao", rank: 45, gpa: 6.6 },
    { id: "STU037", name: "Trisha Das", rank: 24, gpa: 7.8 },
    { id: "STU038", name: "Jhanvi Sen", rank: 47, gpa: 6.5 },
    { id: "STU039", name: "Aarna Malhotra", rank: 29, gpa: 7.6 },
    { id: "STU040", name: "Saanvi Kapoor", rank: 50, gpa: 6.3 },
    { id: "STU041", name: "Divya Agarwal", rank: 32, gpa: 7.4 },
    { id: "STU042", name: "Rhea Yadav", rank: 55, gpa: 6.1 },
    { id: "STU043", name: "Nisha Mishra", rank: 34, gpa: 7.3 },
    { id: "STU044", name: "Kriti Bansal", rank: 60, gpa: 5.9 },
    { id: "STU045", name: "Shivani Iyer", rank: 37, gpa: 7.1 },
    { id: "STU046", name: "Aarti Nair", rank: 65, gpa: 5.7 },
    { id: "STU047", name: "Pooja Rao", rank: 39, gpa: 7.0 },
    { id: "STU048", name: "Anjali Das", rank: 70, gpa: 5.5 },
    { id: "STU049", name: "Swati Sen", rank: 41, gpa: 6.9 },
    { id: "STU050", name: "Radhika Gupta", rank: 72, gpa: 5.0 },
    { id: "STU051", name: "Simran Khan", rank: 43, gpa: 6.8 },
    { id: "STU052", name: "Priyanka Jain", rank: 68, gpa: 5.6 },
    { id: "STU053", name: "Sakshi Ali", rank: 44, gpa: 6.7 },
    { id: "STU054", name: "Deepika Chawla", rank: 66, gpa: 5.8 },
    { id: "STU055", name: "Kajal Singh", rank: 46, gpa: 6.6 },
    { id: "STU056", name: "Ritu Kumar", rank: 64, gpa: 5.9 },
    { id: "STU057", name: "Shalini Bose", rank: 48, gpa: 6.5 },
    { id: "STU058", name: "Geeta Roy", rank: 62, gpa: 6.0 },
    { id: "STU059", name: "Suman Patel", rank: 49, gpa: 6.4 },
    { id: "STU060", name: "Naina Desai", rank: 60, gpa: 6.1 },
    { id: "STU061", name: "Uma Iyer", rank: 51, gpa: 6.3 },
    { id: "STU062", name: "Vandana Sharma", rank: 58, gpa: 6.2 },
    { id: "STU063", name: "Jyoti Gupta", rank: 53, gpa: 6.4 },
    { id: "STU064", name: "Pallavi Nair", rank: 56, gpa: 6.3 },
    { id: "STU065", name: "Rekha Rao", rank: 54, gpa: 6.5 },
    { id: "STU066", name: "Sunita Das", rank: 57, gpa: 6.2 },
    { id: "STU067", name: "Meenakshi Sen", rank: 59, gpa: 6.1 },
    { id: "STU068", name: "Lata Malhotra", rank: 61, gpa: 6.0 },
    { id: "STU069", name: "Kiran Kapoor", rank: 63, gpa: 5.9 },
    { id: "STU070", name: "Anita Agarwal", rank: 67, gpa: 5.7 },
    { id: "STU071", name: "Sarla Yadav", rank: 69, gpa: 5.6 },
    { id: "STU072", name: "Preeti Mishra", rank: 71, gpa: 5.4 }
];

// Exam marks data (only internal exams remain)
const examMarks = {
    internal: {
        "periodic-test-1": students.map((student, index) => ({
            id: student.id,
            marks: {
                DAA: 70 + (index % 30),
                DM: 72 + (index % 28),
                OB: 68 + (index % 32),
                UHV: 75 + (index % 25),
                WT: 70 + (index % 30),
                PS: 73 + (index % 27)
            }
        })),
        "mid-sem": students.map((student, index) => ({
            id: student.id,
            marks: {
                DAA: 65 + (index % 35),
                DM: 68 + (index % 33),
                OB: 66 + (index % 37),
                UHV: 70 + (index % 30),
                WT: 64 + (index % 35),
                PS: 67 + (index % 32)
            }
        })),
        "periodic-test-2": students.map((student, index) => ({
            id: student.id,
            marks: {
                DAA: 80 + (index % 20),
                DM: 82 + (index % 18),
                OB: 78 + (index % 22),
                UHV: 79 + (index % 21),
                WT: 77 + (index % 23),
                PS: 81 + (index % 19)
            }
        }))
    }
};

const examPeriodSelect = document.getElementById('exam-period');
const showMarksBtn = document.getElementById('show-marks-btn');

// Show login modal
loginBtn.onclick = () => modal.style.display = 'block';

// Close modal
closeModal.onclick = () => modal.style.display = 'none';

// Simulate login and set fixed data
loginForm.onsubmit = (e) => {
    e.preventDefault();
    const studentId = document.getElementById('student-id').value;
    const studentNameInput = document.getElementById('student-name-input').value;

    // Validate student credentials
    const student = students.find(s => s.id === studentId && s.name === studentNameInput);
    if (!student) {
        alert("Invalid Student ID or Name. Please try again.");
        return;
    }

    modal.style.display = 'none';
    dashboard.classList.remove('hidden');
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    studentName.textContent = studentNameInput;
    studentImage.src = 'https://via.placeholder.com/100';
    rank.textContent = `${student.rank} / 72`;
    gpa.textContent = student.gpa.toFixed(2);
    attendance.textContent = "90%";
    courseCompletion.textContent = "85%";
    progress.style.width = "85%";

    // Set fixed course completion percentages
    const completionPercentages = [80, 85, 75, 90, 70, 82];
    subjectCompletions.forEach((completion, index) => {
        completion.textContent = completionPercentages[index];
        subProgressBars[index].style.width = `${completionPercentages[index]}%`;
    });
};

// Update marks based on exam period
function updateMarks() {
    const examPeriod = examPeriodSelect.value;
    const studentId = document.getElementById('student-id').value;
    const studentMarks = examMarks.internal[examPeriod].find(m => m.id === studentId);

    if (studentMarks) {
        const maxMarksPerSubject = 20;
        const marksArray = [
            Math.round((studentMarks.marks.DAA / 100) * maxMarksPerSubject),
            Math.round((studentMarks.marks.DM / 100) * maxMarksPerSubject),
            Math.round((studentMarks.marks.OB / 100) * maxMarksPerSubject),
            Math.round((studentMarks.marks.UHV / 100) * maxMarksPerSubject),
            Math.round((studentMarks.marks.WT / 100) * maxMarksPerSubject),
            Math.round((studentMarks.marks.PS / 100) * maxMarksPerSubject)
        ];
        const totalObtained = marksArray.reduce((a, b) => a + b, 0);

        gradeMarks.forEach((mark, index) => {
            if (index < 6) mark.textContent = marksArray[index];
            else mark.textContent = totalObtained;
        });
    } else {
        gradeMarks.forEach((mark, index) => {
            if (index < 6) mark.textContent = "N/A";
            else mark.textContent = "N/A";
        });
    }
}

// Show marks on button click
showMarksBtn.onclick = () => {
    updateMarks();
};

// Logout functionality
logoutBtn.onclick = () => {
    dashboard.classList.add('hidden');
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'block';
    studentName.textContent = 'Student';
    studentImage.src = 'https://via.placeholder.com/100';
    rank.textContent = "N/A";
    gpa.textContent = "N/A";
    attendance.textContent = "90%";
    courseCompletion.textContent = "85%";
    progress.style.width = "85%";
    
    gradeMarks.forEach((mark, index) => {
        mark.textContent = (index < 6) ? "N/A" : "N/A";
    });

    const completionPercentages = [80, 85, 75, 90, 70, 82];
    subjectCompletions.forEach((completion, index) => {
        completion.textContent = completionPercentages[index];
        subProgressBars[index].style.width = `${completionPercentages[index]}%`;
    });

    loginForm.reset();
};

// Close modal when clicking outside
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};