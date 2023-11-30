import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

const TrainerPlan = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const trainerName = params.get('trainerName');
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)

    // console.log(user?.displayName);

    const handlePlan = async (selectedPlan) => {
        if (selectedPlan === 'basic') {
            const planInfo = { member: 5, class: 15 }
            const userName = user?.displayName
            const userEmail = user?.email
            const plans = { selectedPlan, trainerName, planInfo, userName, userEmail }

            console.log(plans);
            const plansData = await axiosPublic.post('/plans', plans);
            console.log(plansData.data)
            if (plansData.data.insertedId) {

                alert('done')
            }
        }
        else if (selectedPlan === 'standard') {
            const planInfo = { member: 8, class: 25 }
            const userName = user?.displayName
            const userEmail = user?.email
            const plans = { selectedPlan, trainerName, planInfo, userName, userEmail }

            console.log(plans);
            const plansData = await axiosPublic.post('/plans', plans);
            console.log(plansData.data)
            if (plansData.data.insertedId) {

                alert('done')
            }
        }
        else if (selectedPlan === 'premium') {
            const planInfo = { member: 12, class: 40 }
            const userName = user?.displayName
            const userEmail = user?.email
            const plans = { selectedPlan, trainerName, planInfo, userName, userEmail }

            console.log(plans);
            const plansData = await axiosPublic.post('/plans', plans);
            console.log(plansData.data)
            if (plansData.data.insertedId) {
                alert('done')
            }
        }

    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card color="gray" variant="gradient" className=" rounded-none  p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase text-xl"
                    >
                        Basic
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className="mt-2 text-4xl">$</span>250{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">5 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">15 class</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">1 support</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">1 year free updates</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">
                                Life time technical support
                            </Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                        onClick={() => handlePlan('basic')}
                    >
                        Join
                    </Button>
                </CardFooter>
            </Card>
            {/* card 2  */}
            <Card color="gray" variant="gradient" className="rounded-none p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase text-xl"
                    >
                        Standard
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className="mt-2 text-4xl">$</span>400{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">8 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">25 class</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">2 support</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">1 year free updates</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">
                                Life time technical support
                            </Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                        onClick={() => handlePlan('standard')}
                    >
                        Join
                    </Button>
                </CardFooter>
            </Card>
            {/* card 3  */}
            <Card color="gray" variant="gradient" className="rounded-none p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase text-xl"
                    >
                        Premium
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className="mt-2 text-4xl">$</span>650{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">12 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">40 class</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">4 support</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">2 year free updates</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">
                                Life time technical support
                            </Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                        onClick={() => handlePlan('premium')}

                    >
                        Join
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TrainerPlan;