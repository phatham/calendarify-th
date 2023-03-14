import Calendarify from './main';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <input type="text" class="calendarify-input" />
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
`;

const calendarify = new Calendarify('.calendarify-input', {
  onChange: (calendarify) => console.log(calendarify), // You can trigger whatever function in this property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons with boolean
  isDark: false, // You can enable/disable dark mode
  zIndex: 9999,
  yearOffset: 543,
  customClass: ['font-poppins'], // You can add custom class to the calendarify element
  locale: {
    // You can set locale for calendar
    format: 'DD-MM-YYYY', // Set Custom Format with Moment JS
    lang: {
      code: 'th', // Set country code (e.g. "en", "id", etc)
      months: [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม',
      ],
      shortMonths: [
        'ม.ค.',
        'ก.พ.',
        'มี.ค.',
        'เม.ย.',
        'พ.ค.',
        'มิ.ย.',
        'ก.ค.',
        'ส.ค.',
        'ก.ย.',
        'ต.ค.',
        'พ.ย.',
        'ธ.ค.',
      ], // Or you can use locale moment.months instead
      weekdays: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'], // Or you can use locale moment.weekdays instead
      ui: {
        // You can set locale text for quick action buttons
        quickActions: {
          today: 'Hari Ini',
          tomorrow: 'Besok',
          inTwoDays: 'Lusa',
        },
      },
    },
  },
});

calendarify.init();
