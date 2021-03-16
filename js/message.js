const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');



const showMessage = (message) => {
    document.body.appendChild(message);
    message.style.display = 'block';
}

const showSuccessMessage = () => {
    const success = successMessage.cloneNode(true);
    showMessage(success);
}

const showErrorMessage = () => {
    const error = errorMessage.cloneNode(true);
    showMessage(error);
}

const getXhrData = (onLoad, onError) => {
    xhr.addEventListener('timeout', function () {
        onError('timeOut ' + xhr.timeout);
      });
   }

export {showSuccessMessage, showErrorMessage}