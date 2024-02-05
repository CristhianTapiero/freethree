import { StartButtons } from "@/components/intro_buttons"
const Start = () => {
    return(
        <div className="flex justify-center items-center h-screen w-screen flex-col gap-4">
            <h1 className="text-5xl font-semibold text-brand-red">FreeThree</h1>
            <p className="text-lg">Connect the world with you</p>
            <StartButtons />
        </div>
    )
}
export default Start