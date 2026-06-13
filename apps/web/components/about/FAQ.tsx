import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl rounded-3xl bg-[#EAF1EE] p-8">
                <h2 className="mb-10 text-4xl font-bold text-[#264942]">
                    About Obpark
                </h2>

                <Accordion type="single" collapsible>
                    <AccordionItem value="1">
                        <AccordionTrigger>
                            What is Obpark?
                        </AccordionTrigger>

                        <AccordionContent>
                            Obpark helps users improve metabolic health through
                            science-backed products and behavior change.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>
                            How does it support metabolic health?
                        </AccordionTrigger>

                        <AccordionContent>
                            By helping users reduce sugar consumption and build
                            sustainable habits.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}