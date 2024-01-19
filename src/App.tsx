
import { Input, Card, CardHeader, Divider, CardBody, Link } from "@nextui-org/react"
import { useSearchParams } from 'react-router-dom';
import share from './assets/share.svg'
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const App = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [gender, setGender] = useState("");
    const [relation, setRelation] = useState("");
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        // setCurrentUrl(window.location.href);
        const urlRelation = searchParams.get("relation") || "";
        setRelation(urlRelation);
    }, []);

    const handleFormState = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event?.target;

        const updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set(name, value);

        setSearchParams(updatedSearchParams);
    };

    const handleUpdateUrl = (selectedRelation: string): void => {
        const urlWithParams = new URL(window.location.href);
        const searchParams = new URLSearchParams(urlWithParams.search);

        searchParams.set('from', searchParams.get('from') || '');
        searchParams.set('to', searchParams.get('to') || '');
        searchParams.set('relation', selectedRelation);

        urlWithParams.search = searchParams.toString();

        window.history.replaceState({}, '', urlWithParams.toString());
    };


    const handleValidation = () => {
        if (!searchParams.get('from')) {
            toast.error('እባክዎ ስሞትን ያስገቡ፡፡');
            return;
        }

        if (!searchParams.get('to')) {
            toast.error('እባክዎ የተቀባዩን ስም ያስገቡ፡፡');
            return;
        }

        if (!gender) {
            toast.error("እባክዎ የተቀባዩን ጾታ ይምረጡ::");
            return;
        }
        if (!relation) {
            toast.error("እባክዎ ተቀባዩ የእርሶ ምን እንደሆነ ይምረጡ፡፡");
            return;
        }

        const currentSearchParams = new URLSearchParams(searchParams.toString());
        currentSearchParams.set('postcard', 'true');

        setSearchParams(currentSearchParams);
        handleUpdateUrl(relation);

        setCurrentUrl(window.location.href);
        // Add any additional logic for handling postcard visibility if needed
    };

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(currentUrl);
        toast.success(`Link Copied Successfully! You can Share it to ${searchParams.get('to')} now`);
    };

    return (
        <main className="px-2 ">
            <div className={`mb-20 h-screen ${searchParams.get("postcard") === "true" ? "hidden" : ""}`}>

                <div className="h-20 flex justify-center relative bg-white w-full p-2">
                    <Link href="https://t.me/biranadigitals">
                        <img className="h-16 w-auto object-contain" src="./logo.png" alt="" />
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    <div id="big-text" className="text-[#fc7405] flex flex-col items-center py-5">
                        <h1 className="text-4xl py-2">ዲጂታል ፖስትካርድ ለወዳጆችዎ ይላኩ</h1>
                        <h1 className="text-xl ">Send an E-card for your beloved one!</h1>
                    </div>
                    <div className="flex flex-col w-[80%]   max-w-[400px]  py-2">
                        {/* <h3 className="py-2 font-bold text-3xl"> ወዳጅ ዘመድዎን እንኳን አደረሰዎ ይበሉ!!</h3> */}
                        <form className="w-full max-w-[400px] flex flex-col gap-y-3">
                            <Input defaultValue={searchParams.get('from')!} className="bg-[#fc7405] font-medium" name="from" onChange={(e) => { console.log(e.target.value); handleFormState(e) }} type="text" label="Sender's Name (ከ . . .?)" />
                            <Input defaultValue={searchParams.get('to')!} className="bg-[#fc7405] font-medium" name="to" onChange={(e) => { console.log(e.target.value); handleFormState(e) }} type="text" label="Receiver's Name (ለ . . .?)" />
                        </form>
                        <h5 className="pt-4  text-xl">የተቀባዩ ጾታ</h5>
                        <h5 className="pb-2  text-xl">Receiver's Gender</h5>
                        <div className="flex gap-3 m">
                            <button className={`px-4 py-2 rounded-md ${gender === "male" ? "bg-[#fc7405] text-white" : "bg-gray-200 "}`} onClick={() => setGender("male")}>ወንድ</button>
                            <button className={`px-4 py-2 rounded-md ${gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200 "}`} onClick={() => setGender("female")}>ሴት</button>
                        </div>
                        <h5 className="pt-4  text-xl">{gender === "female" ? "ተቀባይዋ " : "ተቀባዩ "} የእርሶ ምንድን {gender === "female" ? "ናት " : "ነው "}?</h5>
                        <h5 className="py-1  text-m">The Receiver is your . . .</h5>

                        <div className=" max-w-[500px] grid grid-cols-2 gap-3 ">
                            <button className={`${gender === "male" ? "block" : "hidden"} px-4 py-2 rounded-md ${relation === "maCr" ? "bg-[#fc7405]  text-white" : "bg-gray-200 "}`} onClick={() => { setRelation("maCr"); handleUpdateUrl("maCr"); }}>
                                የምወደው ልጅ 🥰
                            </button>
                            <button className={`${gender === "female" ? "block" : "hidden"} px-4 py-2 rounded-md ${relation === "feCr" ? "bg-[#fc7405]  text-white" : "bg-gray-200 "}`} onClick={() => {
                                setRelation("feCr"); handleUpdateUrl("feCr");
                            }}
                            >
                                የምወዳት ልጅ 🥰
                            </button>
                            <button
                                className={`${gender === "male" ? "block" : "hidden"} px-4 py-2 rounded-md ${relation === "bf" ? "bg-[#fc7405]  text-white" : "bg-gray-200 "
                                    }`}
                                onClick={() => {
                                    setRelation("bf");
                                    handleUpdateUrl("bf");
                                }}
                            >
                                ፍቅረኛ 👩🏻‍❤️‍👨🏻
                            </button>
                            <button
                                className={`${gender === "male" ? "block" : "hidden"} px-4 py-2 rounded-md ${relation === "maFr" ? "bg-[#fc7405]  text-white" : "bg-gray-200 "}`} onClick={() => {
                                    setRelation("maFr");
                                    handleUpdateUrl("maFr");
                                }}
                            >
                                የወንድ ጓደኛ
                            </button>
                            <button
                                className={`${gender === "female" ? "block" : "hidden"} px-4 py-2 rounded-md ${relation === "gf" ? "bg-[#fc7405]  text-white" : "bg-gray-200 "
                                    }`}
                                onClick={() => {
                                    setRelation("gf");
                                    handleUpdateUrl("gf");
                                }}
                            >
                                ፍቅረኛ  ,👩🏻‍❤️‍👨🏻
                            </button>
                            <button
                                className={`${gender === "female" ? "block" : "hidden"} px-4 py-2 rounded-md ${relation === "feFr" ? "bg-[#fc7405]  text-white" : "bg-gray-200 "}`} onClick={() => {
                                    setRelation("feFr");
                                    handleUpdateUrl("feFr");
                                }}
                            >
                                የሴት ጓደኛ
                            </button>

                        </div>
                        {/* <Toaster
                                richColors

                                gap={48}
                                toastOptions={{
                                    unstyled: true,
                                    classNames: {
                                    },
                                }}
                                
                                position="bottom-center" /> */}
                        <p>relation: {relation}</p>
                        <button onClick={handleValidation} className="py-3  px-10 flex w-full my-5  max-w-[500px] justify-center bg-[#fc7405] rounded-lg font-medium text-white" >Generate</button>

                    </div>
                </div>

            </div>
            <div id="preview" className={`${searchParams.get("postcard") === "true" ? "flex" : "hidden"} h-screen w-full flex-col items-center  py-2`}>
                <Card className={`w-full max-w-[500px] h-full`}>
                    <div className="flex justify-center h-14 relative bg-white w-full p-2 cursor-pointer">
                        <img className="h-12 w-auto object-contain" src="./logo.png" alt="" />
                    </div>
                    <CardHeader className="flex justify-between gap-3">
                    </CardHeader>
                    <Divider />
                    <CardBody className="overflow-hidden relative">
                        {/* {relation === "bf" || relation === "gf" ?

                            <img className="   absolute w-full opacity-80 " src="./couples.png" alt="" />
                            :
                            <img className="   absolute w-full -top-16 left-28" src="./lomimotion.png" alt="" />
                        }
                        <img className="opacity-80  object-contain absolute w-full " src="./lomiwrwera.png" alt="" /> */}

                        <h1 id="big-text" className="text-2xl"> </h1>
                        <div>
                            {/* <span className="w-[60px] h-[60px] bg-[#fc7405] absolute rounded-full -right-5" /> */}
                            {/* <span className="w-[80px] h-[80px] bg-yellow-400 absolute rounded-full -left-8" /> */}
                            {/* <span className="w-[80px] h-[80px] bg-[#fc7405] absolute rounded-full top-[30%] left-10" /> */}
                        </div>
                        <div className="relative   text-black  py-2 text-lg  space-y-3 p-2 border border- rounded-lg shadow-sm mt-4">
                            <div className="flex justify-end text-2xl items-center gap-2">
                                <strong className=" opacity-70">ለ:</strong>
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold"> <p className="text-2xl capitalize">{searchParams.get('to')}</p></h1>
                                </div>
                            </div>
                            <div className="relative  ">
                                <br />
                                <p className="font-bold text-2xl">
                                    {relation === "maCr" ? (<p className="text-center"> ለወንድ ክረሽ  <br />ለጥምቅት 'ማይሆነኝ ቀሚሴ ይበጣጠስ <br /> ፏ ብለን እንሂድ ከከተራው ድረስ 😆🥰</p>) : ""}

                                    {relation === "feCr" ? (<p className="text-center">
                                        ለሴት ክረሽ <br />
                                        ባልመጣ እንኳን ካንቺ በአካል ባላገኝሽ <br /> ዲጂታሉን ሎሚ በስልኬ ላኩልሽ 😆🥰</p>) : ""}

                                    {relation === "bf" ? (<p className="text-center">ለቦይፍሬንድ <br /> የጥምቀቱ 'ለታ ተውበህ ላግኝህ  <br />የልቤ ላይ ንጉስ ሰርክአዲስ ነው ፍቅርህ <br /></p>) : ""}
                                    {relation === "gf" ? (<p className="text-center">ለgirlfriend <br />የጥምቀቱ 'ለታ ነይልኝ ላግኝሽ   <br /> ሃገር ይወቅልኝ ንግስቴ እንደሆንሽ <br /> ደግሞ . . . <br /> ምንም ባትዘንጪም እንዲሁ ቆንጆ ነሽ  </p>) : ""}
                                    {relation === "maFr" ? (<p className="text-center">lewend guadegna <br />እንኳን ለብርሃነ ጥምቀቱ በሰላም አደረሰህ {searchParams.get('from')}.  <br />መልካም በአል <br /><br /> <br />  </p>) : ""}
                                    {relation === "feFr" ? (<p className="text-center">ለset guadegna <br />  <br /> <br /><br /> <br />  </p>) : ""}






                                    <br />



                                    {/* {gender === "male" ? " ውዱ" : "ውዷ"}

                  {" "}
                  {relation} */}

                                    {/* <p className="capitalize">ከ {" "} {searchParams.get('from')}</p> */}
                                </p>
                            </div>
                        </div>
                        <div className="flex my-20  justify-center">

                            <Link href="/" className="text-xl text-center text-black bg-[#fc7405] mr-6 rounded-lg px-1  max-w-[100px] mt-16 ">
                                Generate new
                            </Link>
                            <div className="text-xl  bg-[#fc7405]  rounded-lg  px-1  max-w-[100px] mt-16 text-black">
                                <button onClick={handleCopyUrl}>

                                    <img className="h-10  m-2" src={share} alt="Share" />

                                </button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </main>
    )
}

export default App

