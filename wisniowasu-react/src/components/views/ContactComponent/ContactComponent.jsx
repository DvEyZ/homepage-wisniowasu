import React from 'react';
import MenuComponent from '../../partials/MenuComponent/MenuComponent';
import FooterComponent from '../../partials/FooterComponent/FooterComponent';

class ContactComponent extends React.Component 
{
    render()
    {
        return (
            <div class="contact">
                <MenuComponent active_contact="true" />
                <div class="title_box">
                    <h1 class="title_box_text">
                        KONTAKT
                    </h1>
                </div>
                <div class="fullpadding" id="contact_container">
                    <div class="smallbox slideable">
                        <div class="data">
                            <p class="title">Napisz maila</p>
                            <br/>
                            <p class="subtitle">Kontakowy adres mailowy SU</p>
                            <a href="mailto:su@tm1.edu.pl">kontakt@wisniowasu.pl</a>
                            <br/><br/>
                            <p class="subtitle">Administrator IT</p>
                            {/* Maciej Tracz */ this.props.admin_name}
                            <br/>
                            <a href={"mailto:" + /* maciej.tracz@tm1.edu.pl */ this.props.admin_email}>{this.props.admin_email}</a>
                        </div>
                        <div class="map">
                            <p class="title">Odwiedź nas</p>
                            <br/>
                            pokój 23
                            <br/>
                            ul. Wiśniowa 56
                            <br/>
                            02-520 Warszawa
                        </div>
                        <div class="links">
                            <p class="title">Zobacz media</p>
                            <a href="https://facebook.wisniowasu.pl" class="facebook-icon"></a>
                            <a href="https://instagram.wisniowasu.pl" class="instagram-icon"></a>
                            <a href="https://discord.wisniowasu.pl" class="discord-icon"></a>
                        </div>
                    </div>
                    <iframe class="discord slideable" src="https://discordapp.com/widget?id=497703565738115085&theme=light" width="350"
                        height="500" allowtransparency="true" frameborder="0"></iframe>
                </div>
                <FooterComponent />
            </div>
        );
    }
}