import logo from '../assets/images/logo.png'

const AboutUs = ()=> {
    return (
        <div>
            <h1>
                About Us
                <img src={logo}/>

            </h1>
            <ul className="aboutUs">
                <li>
                    <strong>Name: Ellis</strong>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias illum nobis quasi facere sapiente, sequi earum. Amet voluptas molestiae eveniet fuga consectetur. Facere nostrum, error dolorum ducimus aspernatur iusto.
                    </div>
                </li>
                <div>

                </div>
                <li>
                <strong>Name: Heather</strong>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum et earum temporibus nobis voluptatibus illo nisi at, repellat, sit dolores id exercitationem expedita, odio ex libero architecto iure facilis eius?</div>
                </li>
                <li>
                <strong>Name: Joseph</strong>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae deleniti esse? Dignissimos accusamus, at quasi corrupti maxime blanditiis ex vel nihil omnis sit eos! Laudantium distinctio quo hic aspernatur!
                    </div>
                </li>
                <li>
                <strong>Name: Chris</strong>
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aspernatur rem repellat, voluptas maxime ipsam magni laborum sed esse? Porro reiciendis ipsa, quae dolorem quia autem pariatur ducimus ratione! Qui.
                    </div>
                </li>
            </ul>
        </div>
    )
};
export default AboutUs;