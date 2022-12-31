// const listCont = document.querySelector('ul');

// fetch('./data.json')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(post => {
//             listCont.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`);
//         });    
//     })


const grid_box = document.querySelector('.--grid-box');
const card_title = document.querySelector('.card-title');
const current_hours = document.querySelector('.current_hours');
const previous_hours = document.querySelector('.previous_hours');

const js_daily = document.querySelector('.js-daily');
const js_weekly = document.querySelector('.js-weekly');
const js_monthly = document.querySelector('.js-monthly');

const choice_str = document.querySelectorAll('.choice-str');

// for(let i=0; i<choice_str.length; i++){
//     choice_str[1].addEventListener('change', () => {
        
//     })
// }

fetch('./data.json')
.then(res => res.json())
.then(data => {
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add(item.className);
        div.classList.add('card');

        div.innerHTML=`
        <div class="--info-of-card">
        <div class="--header-of-card">
            <p class='card-title'>${item.title}</p>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div class="--hours-of-card">
            <h1 class='current-hours'>${item.timeframes.daily.current}hrs</h1>
            <p class='previous-hours'>Last Week - ${item.timeframes.daily.previous}hrs</p>
        </div>
        </div>`

        js_daily.addEventListener('click', () => {
            div.innerHTML=`
            <div class="--info-of-card">
            <div class="--header-of-card">
                <p class='card-title'>${item.title}</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="--hours-of-card">
                <h1 class='current-hours'>${item.timeframes.daily.current}hrs</h1>
                <p class='previous-hours'>Last Week - ${item.timeframes.daily.previous}hrs</p>
            </div>
            </div>`
            js_daily.classList.add('active');
            js_weekly.classList.remove('active');
            js_monthly.classList.remove('active');
        })

        js_weekly.addEventListener('click', () => {
            div.innerHTML=`
            <div class="--info-of-card">
            <div class="--header-of-card">
                <p class='card-title'>${item.title}</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="--hours-of-card">
                <h1 class='current-hours'>${item.timeframes.weekly.current}hrs</h1>
                <p class='previous-hours'>Last Week - ${item.timeframes.weekly.previous}hrs</p>
            </div>
            </div>`
            js_daily.classList.remove('active');
            js_weekly.classList.add('active');
            js_monthly.classList.remove('active');
        })

        js_monthly.addEventListener('click', () => {
            div.innerHTML=`
            <div class="--info-of-card">
            <div class="--header-of-card">
                <p class='card-title'>${item.title}</p>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="--hours-of-card">
                <h1 class='current-hours'>${item.timeframes.monthly.current}hrs</h1>
                <p class='previous-hours'>Last Week - ${item.timeframes.monthly.previous}hrs</p>
            </div>
            </div>`
            js_daily.classList.remove('active');
            js_weekly.classList.remove('active');
            js_monthly.classList.add('active');
        })

        grid_box.appendChild(div);
    });    
})
