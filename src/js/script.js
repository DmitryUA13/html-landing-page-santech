let lastScroll = 0;
const defaulOffset = 250;
const header = document.querySelector('.wrap-header');
const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containsHide = () => header.classList.contains('header-fixed');

window.addEventListener('scroll', () => {

    if(scrollPosition() > lastScroll && !containsHide() && scrollPosition() > defaulOffset){
        header.classList.add('header-fixed');
    }else if(scrollPosition() < (lastScroll-5) && containsHide()){
        header.classList.remove('header-fixed');
    }
    lastScroll = scrollPosition();
});

/*Добавление класса аквтив */
$(document).ready(function(){
    $('.hamburger').click(function(event) {
        $('.hamburger, .right-header, .wrap-header, .button-header').toggleClass('active');
    });
});
const url = "https://script.google.com/macros/s/AKfycbxdI3JwTRegKR0Ga65yDdckpN34g1zjN1IeaLNjPw-wTFOg4n-rdrNnxHfsqvafKzfJ/exec";
let form_consult = document.forms.form_cosultat;
let name_first = form_consult.name;

document.forms.form_cosultat.onsubmit = function (e) {
    e.preventDefault();
    let form = document.forms.form_cosultat;
    let error = formValidate(form);
    if(error['error'] === 0 && error['noName'] === false){
        let nameUserInput = document.forms.form_cosultat.name.value;
        let phoneUserInput = document.forms.form_cosultat.phone.value;
        let formName = document.forms.form_cosultat.id;
    
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url + "?" + "name=" + nameUserInput + "&phone=" + phoneUserInput+ "&form_name=" + formName);
        xhr.send();
        document.forms.form_cosultat.reset();
        hideButtons();
    } else{
        if(error['noName'] === true && error['error'] > 0){
            alert('Вкажіть ваше ім\'я та Проверьте номер телефона. Він повинен бути Без пробелів та скобок');
        }else if(error['noName'] === true && error['error'] === 0){
            alert('Вкажіть ваше ім\'я');
        }
        else{
            alert('Проверьте номер телефона. Він повинен бути Без пробелів та скобок');
        }
    } 
    
}
document.forms.main_form.onsubmit = function (e) {
    e.preventDefault();
    let form_main = document.forms.main_form;
    let error = formValidate(form_main);   
    if(error['error'] === 0 && error['noName'] === false){
        let nameUserInput = form_main.name.value;
        let phoneUserInput = form_main.phone.value;
        let formName = form_main.id;
        let xhr = new XMLHttpRequest();
        let query = url + "?name=" + nameUserInput + "&phone=" + phoneUserInput+ "&form_name=" + formName;
        xhr.open('GET', query);
        xhr.send();
        document.forms.main_form.reset();
        hideButtons();
        redUrl();
        
    } else{
        if(error['noName'] === true && error['error'] > 0){
            alert('Вкажіть ваше ім\'я та Проверьте номер телефона. Він повинен бути Без пробелів та скобок');
        }else if(error['noName'] === true && error['error'] === 0){
            alert('Вкажіть ваше ім\'я');
        }
        else{
            alert('Проверьте номер телефона. Він повинен бути Без пробелів та скобок');
        }
    }

    
}

function formValidate(form){
    let respArr = [];
    let error = 0;
    let reqForm = document.querySelectorAll('._req');
    let noName = false;
    for(let index = 0; index < reqForm.length; index++){
        let reqFormId = reqForm[index].form.id;
        if(reqForm[index].form.id === form.id){
            
            const input = reqForm[index];
            formRemoveError (input);
            
            if(input.classList.contains('phone_field')){
                if(phoneTest(input)){
                    formAddError (input);
                    error++;
                }else if(input.value === ''){
                    formAddError (input);
                    error++;
                }
            }
            if(input.classList.contains('name_field')){
                if(input.value === ''){
                    formAddError (input);
                    noName = true;
                }
            }
        }
        
    }

    function formAddError (input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError (input){
        input.parentElement.classList.remove('._error');
        input.classList.remove('_error');
    }
    function phoneTest(input){
        return !/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/.test(input.value);
    }
    respArr['error'] = error;
    respArr['noName'] = noName;
    return respArr;

}
/*Редирект на вайбер*/
function redUrl(){
    document.location.replace('viber://pa?chatURI=1-santech&context=conversation_started&text=Відправте мені прайс');
}

/*Скріваю кнопки и показіваю сообщение о перезагузке страницы*/

function hideButtons() {
    let showBlock = document.querySelectorAll('.disable');
    showBlock.forEach(x =>{
        x.classList.remove('disable');
        x.classList.add('on_vivsible');
    }); 
    let buttonHide = document.querySelectorAll('.subm_butt');
    buttonHide.forEach(x =>{
        x.classList.add('disable');
    }); 
}