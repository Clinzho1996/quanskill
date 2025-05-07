"use client";
import { IconArrowLeft, IconCaretRightFilled } from "@tabler/icons-react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function Waitlist() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [form, setForm] = useState({
		full_name: "",
		email: "",
		phone_number: "",
		country: "",
	});

	const date = new Date();

	const formSubmit = async () => {
		// Check if both email and password are provided
		if (
			form.full_name.trim() === "" ||
			form.email.trim() === "" ||
			form.phone_number.trim() === "" ||
			form.country.trim() === ""
		) {
			toast.error("Please fill in all fields");
			return;
		}

		setIsLoading(true);

		try {
			const { data } = await axios.post(
				"https://quanskill.kuditrak.ng/api/v1/waitlist",
				{
					full_name: form.full_name,
					email: form.email,
					phone_number: form.phone_number,
					country: form.country,
				},
				{
					headers: {
						Accept: "application/json",
						referer: "aitechma.com",
					},
				}
			);

			// Check if the login was successful
			if (data.status === "success") {
				// Redirect user to the home page
				router.push("/success");
			} else {
				// Handle unsuccessful login attempt
				toast.error("Error", data.message || "Login failed");
			}
		} catch (error: unknown) {
			// Handle errors from the API or network issues
			if (axios.isAxiosError(error)) {
				console.log(
					"Error fetching posts:",
					error.response?.data || error.message
				);
				toast.error(error.response?.data?.message || "Login failed");
			} else {
				console.log("Unexpected error:", error);
			}
		} finally {
			// Reset the loading state after request completion
			setIsLoading(false);
		}
	};
	return (
		<div className="w-full bg-white flex flex-col lg:flex-row justify-between items-center h-screen">
			<div className="w-full lg:w-[50%] flex flex-col gap-10 p-[4%]">
				<Link href="/">
					<p className="flex flex-row justify-start text-[#6B7280] items-center gap-2 text-[14px] font-medium font-inter">
						<IconArrowLeft size={20} color="#6B7280" /> Back to Homepage
					</p>
				</Link>
				<div className="gap-4 w-full lg:w-[80%] mx-auto border-[1px] border-[#0000001A] rounded-lg p-10 shadow-lg">
					<div className="flex flex-col justify-center items-center gap-3">
						<Link href="/">
							<Image
								alt="logo"
								src="/logo.png"
								width={135}
								height={50}
								className="object-contain"
							/>
						</Link>
						<p className="text-primary text-xs lg:text-sm font-semibold font-inter">
							Join Our May Cohort
						</p>
						<p className="text-xs text-[#6B7280] font-inter font-light">
							Please drop your details here so we can keep in touch
						</p>
					</div>

					{/* form section */}
					<div className="flex flex-col justify-start items-start w-full mt-4">
						<p className="text-xs text-[#6B7280] font-inter font-light">
							Full Name
						</p>
						<input
							placeholder="enter your full name"
							value={form.full_name}
							onChange={(e) => setForm({ ...form, full_name: e.target.value })}
							className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
						/>
						<p className="text-xs text-[#6B7280] font-inter font-light mt-3">
							Email Address
						</p>
						<input
							type="email"
							placeholder="name@example.com"
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
						/>
						<p className="text-xs text-[#6B7280] font-inter font-light mt-3">
							Phone Number
						</p>
						<input
							placeholder="+84 80 0000 00000"
							value={form.phone_number}
							onChange={(e) =>
								setForm({ ...form, phone_number: e.target.value })
							}
							className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
						/>
						<p className="text-xs text-[#6B7280] font-inter font-light mt-3">
							Country
						</p>
						<input
							placeholder="enter your country"
							value={form.country}
							onChange={(e) => setForm({ ...form, country: e.target.value })}
							className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
						/>
						{isLoading ? (
							<button
								className="bg-secondary flex flex-row justify-center items-center gap-1 text-primary p-3 rounded-lg mt-4 w-full"
								onClick={formSubmit}>
								<p className="text-xs lg:text-sm">Sending....</p>
								<IconCaretRightFilled size={18} />
							</button>
						) : (
							<button
								className="bg-secondary flex flex-row justify-center items-center gap-1 text-primary p-3 rounded-lg mt-4 w-full"
								onClick={formSubmit}>
								<p className="text-xs lg:text-sm">Enroll Now</p>
								<IconCaretRightFilled size={18} />
							</button>
						)}
					</div>
				</div>
				<p className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium font-inter text-[#6B7280]">
					&copy; {date.getFullYear()} Quanskill
				</p>
			</div>
			<div className="w-full lg:w-[50%] hidden lg:flex p-3 rounded-lg">
				<Image
					alt="waitlist"
					src="/bg3.png"
					width={500}
					height={500}
					className="w-full h-[95vh] object-cover rounded-xl"
				/>
			</div>
		</div>
	);
}

export default Waitlist;
