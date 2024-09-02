import { poppins } from '@/app/ui/fonts'
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline'

export default function AcmeLogo() {
    return (
        <div
            className={`${poppins.className} flex flex-row items-center leading-none text-white`}
        >
            <CursorArrowRaysIcon className="h-12 w-12 rotate-[-15deg]" />
            <p className="text-[44px]">Bun</p>
        </div>
    )
}
