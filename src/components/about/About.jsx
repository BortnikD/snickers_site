import React, { Component } from "react";
import './about.css'

export class About extends Component {
    render() {
        return (
            <div className="about" >
                <div className="about-content">
                    <div className="about-title">О нас</div>
                    <div className="about-description">
                        Добро пожаловать в SnikersHub — место, где стиль встречается с комфортом. 
                        Мы специализируемся на продаже уникальных и качественных сникеров, которые отражают последние модные тренды. 
                        Наша команда страстно увлечена миром кроссовок, и мы стремимся предложить нашим клиентам только лучшее. <br/><br/>

                        Мы верим, что обувь — это не просто функциональная часть гардероба, а способ выразить свою индивидуальность и подчеркнуть уникальный стиль. 
                        В нашем ассортименте вы найдете как культовые модели, так и эксклюзивные новинки, которые идеально подойдут для любого случая.<br/><br/> 

                        Наши главные ценности — это качество, доверие и внимание к деталям. 
                        Каждый сникер, который вы видите на нашем сайте, тщательно отобран и проверен на соответствие нашим высоким стандартам. 
                        Мы гордимся тем, что можем предложить вам не просто обувь, а настоящие произведения искусства, созданные с любовью и вниманием.
                        Спасибо, что выбрали нас.
                        Мы всегда готовы помочь вам в выборе идеальной пары сникеров, которая подчеркнет вашу индивидуальность и добавит уверенности в каждом шаге.
                    </div>
                    <div className="about-links">
                        Подпишитесь на наши соцсети: <br/>
                        <a href="https://t.me/">телеграмм</a><br/>
                        <a href="https://instagram.com">Instagram</a><br/>
                    </div>
                </div>

            </div>
        )
    }
}

export default About