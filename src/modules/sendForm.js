const sendForm = () => {
  const statusBlock = document.createElement('div');
  const loadText = 'Идет отправка';
  const errorText = 'Ошибка';
  const successText = 'Отправлено';

  const sendData = (data) => {
    return fetch('server.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const validateInput = (list) => {
    let success = true;

    if ((list.querySelector('input[name=tel]').value.length < 6 ||
      list.querySelector('input[name=tel]').value.length > 16) ||
      list.querySelector('input[name=fio]').value.length < 2) {
      success = false
    }

    return success;
  }

  const submitForm = (blockForm) => {
    const formInputs = blockForm.querySelectorAll('.form-control');

    const formData = new FormData(blockForm);
    const formBody = {};

    statusBlock.textContent = loadText;
    blockForm.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    if (validateInput(blockForm)) {
      sendData(formBody)
        .then(res => {
          statusBlock.textContent = successText;

          formInputs.forEach(input => {
            input.value = ''
          })
        })
        .catch(data => {
          statusBlock.textContent = errorText;
        })
    } else {
      alert('Введите необходимое количество символов \n Имя более 2 символов \n Телефон должен содержать от 6 до 16 цифр');
      statusBlock.textContent = '';
    }
  }

  try {
    const form = document.getElementById('callback-form');
    const inputName = form.querySelector('input[name=fio]');
    const inputPhone = form.querySelector('input[name=tel]');

    inputName.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-я]/, "")
    });

    inputPhone.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d\+]/, "")
    });

    if (!form) {
      throw new Error('Верните форму на место, пожалуйста!')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm(form);
    })
  } catch (error) {
    console.log(error.message)
  }
}

export default sendForm;
