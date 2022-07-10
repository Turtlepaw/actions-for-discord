import NavigationMenu from "../../components/navMenu";

export default function Action(){
    return (
        <div className="topbg clip">
            <NavigationMenu/>
            <div className="pl-16 pt-16">
                
                <div className="title">This is where a<br/>magical action will be.</div>
                <p className='font-semibold poppins'>Actions are little things that run stuff on compatible Discord bots.</p>
            </div>
        </div>
    );
}