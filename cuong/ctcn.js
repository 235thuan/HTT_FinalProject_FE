// Dữ liệu mô phỏng từ cơ sở dữ liệu
const scheduleData = {
    timeSlots: ['Buổi Sáng', 'Buổi Chiều', 'Buổi Tối'],
    days: [
        {
            name: 'Thứ Hai',
            date: '18/03',
            schedule: [
                {
                    time: 'Buổi Sáng',
                    courseName: 'Toán Học A',
                    courseTime: '8:00 - 10:00',
                    className: 'Lớp 12A1'
                },
                {
                    time: 'Buổi Chiều',
                    courseName: 'Vật Lý B',
                    courseTime: '13:00 - 15:00',
                    className: 'Lớp 11A2'
                },
                {
                    time: 'Buổi Tối',
                    courseName: 'Hóa Học C',
                    courseTime: '18:00 - 20:00',
                    className: 'Lớp 10A3'
                }
            ]
        },
        {
            name: 'Thứ Ba',
            date: '19/03',
            schedule: [
                {
                    time: 'Buổi Sáng',
                    courseName: 'Tiếng Anh D',
                    courseTime: '8:00 - 10:00',
                    className: 'Lớp 12B1'
                },
                {
                    time: 'Buổi Chiều',
                    courseName: 'Văn Học E',
                    courseTime: '13:00 - 15:00',
                    className: 'Lớp 11B2'
                },
                {
                    time: 'Buổi Tối',
                    courseName: 'Lịch Sử F',
                    courseTime: '18:00 - 20:00',
                    className: 'Lớp 10B3'
                }
            ]
        },
        {
            name: 'Thứ Tư',
            date: '20/03',
            schedule: [
                {
                    time: 'Buổi Sáng',
                    courseName: 'Sinh Học A',
                    courseTime: '8:00 - 10:00',
                    className: 'Lớp 12C1'
                },
                {
                    time: 'Buổi Chiều',
                    courseName: 'Hóa Học B',
                    courseTime: '13:00 - 15:00',
                    className: 'Lớp 11C2'
                },
                {
                    time: 'Buổi Tối',
                    courseName: 'Vật Lý C',
                    courseTime: '18:00 - 20:00',
                    className: 'Lớp 10C3'
                }
            ]
        },
        {
            name: 'Thứ Năm',
            date: '21/03',
            schedule: [
                {
                    time: 'Buổi Sáng',
                    courseName: 'Toán Học D',
                    courseTime: '8:00 - 10:00',
                    className: 'Lớp 12D1'
                },
                {
                    time: 'Buổi Chiều',
                    courseName: 'Tiếng Anh E',
                    courseTime: '13:00 - 15:00',
                    className: 'Lớp 11D2'
                },
                {
                    time: 'Buổi Tối',
                    courseName: 'Văn Học F',
                    courseTime: '18:00 - 20:00',
                    className: 'Lớp 10D3'
                }
            ]
        },
        {
            name: 'Thứ Sáu',
            date: '22/03',
            schedule: [
                {
                    time: 'Buổi Sáng',
                    courseName: 'Vật Lý A',
                    courseTime: '8:00 - 10:00',
                    className: 'Lớp 12E1'
                },
                {
                    time: 'Buổi Chiều',
                    courseName: 'Sinh Học B',
                    courseTime: '13:00 - 15:00',
                    className: 'Lớp 11E2'
                },
                {
                    time: 'Buổi Tối',
                    courseName: 'Toán Học C',
                    courseTime: '18:00 - 20:00',
                    className: 'Lớp 10E3'
                }
            ]
        },
        {
            name: 'Thứ Bảy',
            date: '23/03',
            schedule: [
                {
                    time: 'Buổi Sáng',
                    courseName: 'Hóa Học D',
                    courseTime: '8:00 - 10:00',
                    className: 'Lớp 12F1'
                },
                {
                    time: 'Buổi Chiều',
                    courseName: 'Toán Học E',
                    courseTime: '13:00 - 15:00',
                    className: 'Lớp 11F2'
                },
                {
                    time: 'Buổi Tối',
                    courseName: 'Tiếng Anh F',
                    courseTime: '18:00 - 20:00',
                    className: 'Lớp 10F3'
                }
            ]
        }
    ]
};

// Function to generate schedule HTML
function generateSchedule(data) {
    // Generate time column
    const timeColumn = `
        <div class="time-column">
            <div class="time-header">Thời Gian</div>
            ${data.timeSlots.map(slot => `
                <div class="time-slot">${slot}</div>
            `).join('')}
        </div>
    `;

    // Generate day columns
    const dayColumns = data.days.map(day => `
        <div class="day-column">
            <div class="day-header">
                <div class="day-name">${day.name}</div>
                <div class="date">${day.date}</div>
            </div>
            ${data.timeSlots.map(timeSlot => {
                const scheduleItem = day.schedule.find(item => item.time === timeSlot);
                return scheduleItem ? `
                    <div class="schedule-slot">
                        <div class="course-name">${scheduleItem.courseName}</div>
                        <div class="course-time">${scheduleItem.courseTime}</div>
                        <div class="course-class">${scheduleItem.className}</div>
                    </div>
                ` : `
                    <div class="schedule-slot"></div>
                `;
            }).join('')}
        </div>
    `).join('');

    return timeColumn + dayColumns;
}

// Update the modal content when clicking the registration button
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('scheduleModal');
    const closeBtn = document.querySelector('.close');
    const dangKyButton = document.querySelector('.dangkyhoc-button');
    const scheduleGrid = document.querySelector('.schedule-grid');

    // Add click event to registration button
    dangKyButton.addEventListener('click', () => {
        // Generate and update schedule content
        scheduleGrid.innerHTML = generateSchedule(scheduleData);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

