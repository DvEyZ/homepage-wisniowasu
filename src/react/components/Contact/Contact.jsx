import "./contact.js";

class Contact extends React.Component
{
    render()
    {
        <div class="contact">
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
                        {this.props.admin_name /* Maciej Tracz */}
                        <br/>
                        <a href={this.props.admin_email /* maciej.tracz@tm1.edu.pl */}>{this.props.admin_email /* maciej.tracz@tm1.edu.pl */}</a>
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
        </div>
    }
}