import {Phone, MailPlus } from "lucide-react"
export default function MovingButton() {
    return (
        <>
             {/* whatsapp Button */}
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"
                class="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
                aria-label="Contact us on WhatsApp">
                <Phone/>
            </a>

            {/* Email Button */}
            <a href="mailto:your-email@example.com"
                class="fixed bottom-6 mr-1 right-20 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300"
                aria-label="Contact us via Email">
                <MailPlus />
            </a>
        </>
    )
}