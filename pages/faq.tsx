import { Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "../components/Link";
import NavigationMenu from "../components/navMenu";

function FAQTitle({ Id, children }: {
    children: React.ReactNode;
    Id: string;
}){
    return (
        <a id={Id} href={`#${Id}`} className="font-extrabold text-3xl">{children}</a>
    );
}

function FAQDescription({ children }: {
    children: React.ReactNode;
}){
    return (
        <Center><p className="font-medium max-w-md pt-2">{children}</p></Center>
    );
}

function FAQItem({ children }: {
    children: React.ReactNode
}){
    return (
        <div className="text-center">
            {children}
        </div>
    )
}

export default function FAQ() {
    return (
        <>
            <div className="topbg clip">
                <NavigationMenu />
                <div className="pl-16 pt-16">
                    <div className="title">FAQ:<br />Frequently<br />Asked<br />Questions</div>
                    <p className='font-semibold poppins'>What's that? What's this? We've got you covered.</p>
                </div>
            </div>
            <div className="pb-10">
                <FAQItem>
                    <FAQTitle Id="what-are-actions">What are actions?</FAQTitle>
                    <FAQDescription>Actions are little things that run stuff on compatible Discord bots. <Link href="/partners">See more about compatible Discord bots</Link>.</FAQDescription>
                </FAQItem>
            </div>
        </>
    );
}