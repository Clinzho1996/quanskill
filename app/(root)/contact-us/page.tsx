"use client";

import Breadcrumb from "@/components/BreadCrumb";
import SecondaryButton from "@/components/SecondaryButton";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

function ContactUs() {
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState({
		first_name: "",
		last_name: "",
		email: "",
		subject: "",
		message: "",
	});

	const formSubmit = async () => {
		// Check if both email and password are provided
		if (
			form.first_name.trim() === "" ||
			form.last_name.trim() === "" ||
			form.email.trim() === "" ||
			form.subject.trim() === "" ||
			form.message.trim() === ""
		) {
			toast.error("Please fill in the required fields");
			return;
		}

		setIsLoading(true);

		try {
			const { data } = await axios.post(
				"https://api.kuditrak.ng/api/v1/contact",
				{
					first_name: form.first_name,
					last_name: form.last_name,
					email: form.email,
					subject: form.subject,
					message: form.message,
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
				toast.success(
					"Message sent successfully",
					data.message || "Message sent successfully"
				);

				// Clear form inputs after success
				setForm({
					first_name: "",
					last_name: "",
					email: "",
					subject: "",
					message: "",
				});
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
		<section>
			<Breadcrumb
				title="Contact Us"
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>

			<section className="p-4">
				<div className="bg-[#F9FAF9] px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg shadow-lg mt-[-27px] sm:mt-[-50px]">
					{/* contact form */}

					<div className="flex flex-col lg:flex-row justify-between items-center w-full">
						<div className="w-full lg:w-[50%] pr-0 lg:pr-20">
							<SecondaryButton title="contact us" img="/icon.png" />
							<h2 className="text-[28px] lg:text-[48px] font-extrabold font-inter text-primary leading-[32px] sm:leading-[60px] mt-4">
								<span className="text-[#0D142080]">Drop us a </span>
								line
							</h2>
							<p className="text-[#0D1420B2] text-sm mt-4">
								Fill out this form and we&apos;ll hop straight to it.
							</p>
							<div className="flex flex-row justify-start gap-3 items-center mt-4">
								<Link href="#">
									<Image src="/s1.png" alt="fb" width={30} height={30} />
								</Link>
								<Link href="#">
									<Image src="/s2.png" alt="fb" width={30} height={30} />
								</Link>
								<Link href="https://www.linkedin.com/company/quanskill">
									<Image src="/s3.png" alt="fb" width={30} height={30} />
								</Link>
								<Link href="https://www.facebook.com/QuanskillDAI" className="cursor-pointer">
									<Image src="/s4.png" alt="fb" width={30} height={30} />
								</Link>
								<Link href="#">
									<Image src="/s5.png" alt="fb" width={30} height={30} />
								</Link>
								<Link href="#">
									<Image src="/s6.png" alt="fb" width={30} height={30} />
								</Link>
							</div>

							<h2 className="mt-4 text-primary text-[18px] lg:text-[24px] font-semibold">
								Looking for support?
							</h2>
							<p className="text-[#0D1420B2] text-sm mt-4">
								We might already have what you&apos;re looking for. See our FAQs
								or head to our dedicated{" "}
								<Link href="#" className="underline font-normal text-primary">
									Help Center.
								</Link>
							</p>

							<hr className="my-4 border-[#0000001A] w-full lg:w-[70%]" />
							<h2 className="mt-4 text-primary text-[18px] lg:text-[24px] font-semibold">
								Support email
							</h2>
							<p className="text-[#0D1420B2] text-sm mt-4">
								Drop us a mail at{" "}
								<Link
									href="mailto:info@quanskill.com"
									className="underline font-normal text-primary">
									info@quanskill.com
								</Link>
							</p>

							<hr className="my-4 border-[#0000001A] w-full lg:w-[70%]" />
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-[50%] mt-10 lg:mt-0">
							<h2 className="text-[28px] lg:text-[48px] font-extrabold font-inter text-primary leading-[32px] sm:leading-[60px] mt-4">
								<span className="text-[#0D142080]">Send us a </span>
								message
							</h2>
							<div className="flex flex-col lg:flex-row justify-between items-center gap-3 w-full mt-4">
								<div className="w-full lg:w-[48%]">
									<p className="text-xs text-[#6B7280] font-inter font-light">
										First Name <span className="text-red-500 text-sm">*</span>
									</p>
									<input
										placeholder="enter your first name"
										value={form.first_name}
										onChange={(e) =>
											setForm({ ...form, first_name: e.target.value })
										}
										className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
									/>
								</div>
								<div className="w-full lg:w-[48%]">
									<p className="text-xs text-[#6B7280] font-inter font-light">
										Last Name <span className="text-red-500 text-sm">*</span>
									</p>
									<input
										placeholder="enter your last name"
										value={form.last_name}
										onChange={(e) =>
											setForm({ ...form, last_name: e.target.value })
										}
										className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
									/>
								</div>
							</div>

							<div className="flex flex-col lg:flex-row justify-between items-center gap-3 w-full mt-3">
								<div className="w-full lg:w-[48%]">
									<p className="text-xs text-[#6B7280] font-inter font-light">
										Email Address{" "}
										<span className="text-red-500 text-sm">*</span>
									</p>
									<input
										type="email"
										placeholder="name@example.com"
										value={form.email}
										onChange={(e) =>
											setForm({ ...form, email: e.target.value })
										}
										className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
									/>
								</div>
								<div className="w-full lg:w-[48%]">
									<p className="text-xs text-[#6B7280] font-inter font-light">
										Subject <span className="text-red-500 text-sm">*</span>
									</p>
									<input
										type="email"
										placeholder="enter your subject"
										value={form.subject}
										onChange={(e) =>
											setForm({ ...form, subject: e.target.value })
										}
										className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
									/>
								</div>
							</div>
							<p className="text-xs text-[#6B7280] font-inter font-light mt-3">
								How can we help? <span className="text-red-500 text-sm">*</span>
							</p>
							<textarea
								value={form.message}
								placeholder="Enter your message here"
								onChange={(e) => setForm({ ...form, message: e.target.value })}
								className="w-full bg-[#9F9E9E29] rounded-lg p-2 border border-[#0000001A] focus:outline-none focus:border-primary mt-2 placeholder:text-sm placeholder:text-[#6B7280] placeholder:font-inter shadow-inner"
							/>
							{isLoading ? (
								<button
									className="bg-secondary flex flex-row justify-center items-center gap-1 text-primary p-3 rounded-lg mt-4 w-full"
									onClick={formSubmit}>
									<p className="text-xs lg:text-sm">Sending....</p>
								</button>
							) : (
								<button
									className="bg-primary flex flex-row justify-center items-center gap-1 p-3 rounded-lg mt-4 w-full"
									onClick={formSubmit}>
									<p className="text-xs text-white lg:text-sm">Send message</p>
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default ContactUs;
