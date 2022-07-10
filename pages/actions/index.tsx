import NavigationMenu from "../../components/navMenu";

export default function ActionsHome(){
    return (
        <div className="topbg clip">
            <NavigationMenu/>
            <div className="pl-16 pt-16">
                <div className="title">Action Store</div>
                <p className='font-semibold poppins'>Actions are little things that run stuff on compatible Discord bots.</p>
            </div>
        </div>
    );
}