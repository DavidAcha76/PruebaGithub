import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, MapPin, Phone } from "lucide-react"

const faqs = [
    {
        question: "What are the adoption fees?",
        answer: "Our adoption fees vary depending on the type and age of the pet. Fees for dogs range from $150 to $300, and cats from $100 to $200. This fee helps cover the cost of spaying/neutering, vaccinations, microchipping, and other medical care."
    },
    {
        question: "What is the adoption process?",
        answer: "The process starts with filling out an adoption application. Once approved, we'll schedule a meet-and-greet with the pet. If it's a good match, we'll finalize the adoption paperwork. We require a home visit for all dog adoptions."
    },
    {
        question: "What is included in the adoption?",
        answer: "Every adopted pet is spayed or neutered, up-to-date on vaccinations, microchipped, and has received a wellness exam from our veterinary team. You'll also receive a starter kit with food, a collar, and a leash."
    },
    {
        question: "Can I return a pet if it's not a good fit?",
        answer: "Yes, we have a 30-day return policy. We understand that sometimes a match doesn't work out. We will welcome the pet back and work with you to find a more suitable companion if you wish."
    },
    {
        question: "Do you allow out-of-state adoptions?",
        answer: "We typically prioritize local adoptions to facilitate home visits and follow-ups. However, we do consider out-of-state adoptions on a case-by-case basis. The adopter would be responsible for all transportation arrangements and costs."
    }
]

export default function AdoptionPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-headline">Adoption Information</h1>
        <p className="text-lg text-muted-foreground mt-4">Everything you need to know about bringing a new friend home.</p>
      </div>

      <div className="bg-card p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-3xl font-bold font-headline mb-4">Our Adoption Policy</h2>
        <p className="text-muted-foreground mb-4">
            At Petopia, our goal is to find loving, permanent homes for all our pets. We are committed to a thorough adoption process to ensure the well-being of our animals and the happiness of their new families.
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Adopters must be 18 years of age or older.</li>
            <li>A valid photo ID with a current address is required.</li>
            <li>We require consent from landlords for renters wishing to adopt.</li>
            <li>All members of the household should meet the pet before adoption.</li>
            <li>We conduct a brief interview and may require a home visit.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                 <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  )
}
