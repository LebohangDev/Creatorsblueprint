import styles from "./Terms.module.css";

function Terms() {
    return (
        <>
            <div className={styles.termsContainer}>
                <div className={styles.termsContent}>
                    <div className={styles.header}>
                        <i className="ri-attachment-2"></i>
                        <h1>Terms <span>of Service</span></h1>
                        <p>Last Updated: 13 September 2025</p>
                    </div>
                    <div className={styles.content}>
                        <p>
                            1. Agreement to Terms
                            <br />
                            By accessing our website www.creatorsblueprint.net and using our services,
                            you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
                        </p>
                        <p>
                            2. Services
                            <br />
                            CreatorsBlueprint provides digital product creation, monetization strategy,
                            and website development for content creators. The specifics of the services
                            are outlined in our "Packages" section and will be detailed in a formal agreement upon engagement.
                        </p>
                        <p>
                            3. Payments and Refunds
                            <br />
                            All prices for our services are listed in AED and USD. Payment is required before work commences.
                            We use third-party payment processors (Stripe/PayPal), and you agree to their terms when making a payment. 
                            All payments made to CreatorsBlueprint are final and non-refundable. 
                            By making a payment, you acknowledge that you have read and agreed to our Terms of Service and Privacy Policy.
                        </p>
                        <p>
                            4. Intellectual Property
                            <br />
                            You, the client, retain all intellectual property rights to your original content and brand assets.
                            We retain the rights to the systems, strategies, and website design structures we create.
                            Upon final payment, you are granted a license to use the delivered website and digital products for your business.
                        </p>
                        <p>
                            5. Limitation of Liability
                            <br />
                            CreatorsBlueprint is not liable for any indirect, incidental, or consequential damages
                            (including loss of income) resulting from the use of our services.
                            Our total liability is limited to the amount you paid for the service.
                        </p>
                        <p>
                            6. Termination
                            <br />
                            We reserve the right to terminate or suspend services at any time if you breach these terms.
                            You may terminate your service agreement according to the terms outlined in your specific contract.
                        </p>
                        <p>
                            7. Governing Law
                            <br />
                            These Terms shall be governed by the laws of the jurisdiction in which CreatorsBlueprint is registered,
                            without regard to its conflict of law provisions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Terms;