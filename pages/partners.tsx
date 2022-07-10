import { Center } from "@chakra-ui/react";
import NavigationMenu from "../components/navMenu";

interface PartnerProps {
    name: string;
    logo: string;
    url: string;
    description: string;
}

function Partner({ description, logo, name, url }: PartnerProps) {
    return (
        <div className="text-center">
            <Center className="pb-2"><img src={logo} className="w-16 rounded-full" /></Center>
            <a href={url} className="text-3xl font-extrabold">{name}</a>
            <Center><div className="max-w-md pt-2 font-medium">{description}</div></Center>
        </div>
    );
}

export default function Partners() {
    return (
        <>
            <div className="topbg clip">
                <NavigationMenu />
                <div className="pl-16 pt-16">
                    <div className="title">Partners</div>
                    <p className='font-semibold poppins'>What are "compatible Discord bots", these are them!</p>
                </div>
            </div>
            <div className="pb-10">
                <Partner
                    description="Horizon is an open-source, typescript built, Discord bot that can be used to run actions using our services."
                    logo="https://horizon.trtle.xyz/icon.png"
                    name="Horizon"
                    url="https://horizon.trtle.xyz"
                />
            </div>
        </>
    );
}