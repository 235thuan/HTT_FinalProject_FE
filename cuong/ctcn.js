// Hàm toggle để hiển thị hoặc ẩn bảng thời khóa biểu
function toggleTimeTable() {
    var timeTable = document.getElementById('timeTable');
    
    // Kiểm tra nếu bảng thời khóa biểu đang ẩn, thì hiển thị nó, và ngược lại
    if (timeTable.style.display === 'none' || timeTable.style.display === '') {
        timeTable.style.display = 'block';
    } else {
        timeTable.style.display = 'none';
    }
}
function toggleNotification() {
    // Lấy phần tử danh sách thông báo
    const notificationList = document.getElementById('notificationList');
    // Hiển thị hoặc ẩn danh sách thông báo
    if (notificationList.style.display === 'none' || notificationList.style.display === '') {
        notificationList.style.display = 'block';
    } else {
        notificationList.style.display = 'none';
    }
}
// Lấy các phần tử cần thiết
const profileButton = document.getElementById('profile-button');
const profileMenu = document.getElementById('profile-menu');
const logoutButton = document.getElementById('logout-button');
const personalPageLink = document.getElementById('personal-page-link');

// Hiển thị menu khi nhấn vào nút hình ảnh
profileButton.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden'); // Thêm hoặc xóa class 'hidden'
});

// Đóng menu khi nhấn ra ngoài
document.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
        profileMenu.classList.add('hidden'); // Ẩn menu
    }
});

// Xử lý sự kiện nhấn nút đăng xuất
logoutButton.addEventListener('click', () => {
    alert('Bạn đã đăng xuất!'); // Xử lý hành động đăng xuất tại đây
});

// Liên kết đến trang cá nhân
personalPageLink.addEventListener('click', () => {
    window.location.href = 'Trang cá nhân.html'; 
});
document.getElementById('dangky-button').addEventListener('click', () => {
    window.location.href = 'Học phí đăng lý học.html';
  });

const subjects = [
    {
        name: 'Math',
        imageUrl: 'https://images.unsplash.com/photo-1484335629320-0e089b87a106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxNYXRoJTJDJTIwTnVtYmVycyUyQyUyMEVxdWF0aW9uc3xlbnwxfHx8fDE3MjkxOTkxMzJ8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        name: 'History',
        imageUrl: 'https://images.unsplash.com/photo-1484335629320-0e089b87a106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxNYXRoJTJDJTIwTnVtYmVycyUyQyUyMEVxdWF0aW9uc3xlbnwxfHx8fDE3MjkxOTkxMzJ8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        name: 'Art',
        imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/1c46998d-b8ec-4b44-822c-14df2f5d7577.png'
    },
    {
        name: 'Languages',
        imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/cfb4d084-9533-4dab-a75a-525d518f48f9.png'
    }
];

const subjectsGrid = document.querySelector('.subjects-grid');
subjectsGrid.innerHTML = subjects.map(subject => `
    <div class="subject-item">
        <div class="subject-image" style="background-image: url('${subject.imageUrl}');">
            <button class="subject-button">${subject.name}</button>
        </div>
    </div>
`).join('');

const courses = [
    {
        title: 'Math Mastery Course',
        subtitle: 'Algebra',
        price: 'from $50/course',
        rating: '9.6',
        imageUrl: 'https://images.unsplash.com/photo-1578593139939-cccb1e98698c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxDbGFzc3Jvb218ZW58MXx8fHwxNzI5MjM3ODM1fDA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        title: 'Science Explorations',
        subtitle: 'Biology',
        price: 'from $70/course',
        rating: '9.6',
        imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxDbGFzc3Jvb20lMkMlMjBMZWFybmluZyUyQyUyMFN0dWR5fGVufDF8fHx8MTcyOTIzNzgzNXww&ixlib=rb-4.0.3&q=80&w=1080'
    }
];

const coursesGrid = document.querySelector('.courses-grid');
coursesGrid.innerHTML = courses.map(course => `
    <div class="course-item">
        <div class="course-image" style="background-image: url('${course.imageUrl}');">
            <button class="rating-button">${course.rating}</button>
            <button class="heart-button">
                <svg class="heart-icon" viewBox="0 0 512 512">
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
                </svg>
            </button>
        </div>
        <div class="course-info">
            <div class="course-title">${course.title}</div>
            <div class="course-subtitle">${course.subtitle}</div>
            <div class="course-price">${course.price}</div>
            <svg class="arrow-icon" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
        </div>
    </div>
`).join('');

