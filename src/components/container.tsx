export const FullPage = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col gap-4">
            {children}
        </div>
    )
}
