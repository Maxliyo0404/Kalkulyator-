const display = document.getElementById('display');

// 1. Ekranga belgi yopishtirish
function appendValue(value) {
  display.value += value;
}

// 2. Ekranni to'liq tozalash
function clearDisplay() {
  display.value = '';
}

// 3. Oxirgi belgini o'chirish
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// 4. Hisoblash
function calculate() {
  try {
    // Agar ekran bo'sh bo'lsa, hech narsa qilmaydi
    if (display.value === '') return;

    // Faqat ruxsat berilgan belgilar borligini tekshirish
    if (!/^[0-9+\-*/.%\s]*$/.test(display.value)) {
      display.value = 'Xato';
      return;
    }

    // % belgisini /100 ga almashtirib hisoblash
    let formattedInput = display.value.replace(/%/g, '/100');
    display.value = eval(formattedInput);

  } catch (e) {
    display.value = 'Xato';
  }
}

// 5. Klaviaturani ulash
document.addEventListener('keydown', function (e) {
  if (/[0-9+\-*/.%]/.test(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});