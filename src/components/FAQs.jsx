
const FAQs = () => {
    return (
        <div className="bg-purple-200 w-4/5 lg:w-3/5 mx-auto border border-solid border-purple-800 rounded-md p-4 mt-8 mb-20 ">
            <h1 className="text-3xl font-bold text-center my-5">Frequently Asked Questions</h1>

            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-lg font-medium">
                    How do I place an order on Gadget Burst?
                    </div>
                    <div className="collapse-content">
                        <p>Placing an order is easy! Simply browse our website, select the desired products, add them to your cart, and proceed to checkout. Follow the prompts to provide shipping information and payment details to complete your purchase.</p>
                    </div>
                </div>
            </div>

            <div className="mt-2">
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-lg font-medium">
                    What payment methods do you accept?
                    </div>
                    <div className="collapse-content">
                        <p>We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure payment gateways. Rest assured, your payment information is handled with the utmost security.</p>
                    </div>
                </div>
            </div>

            <div className="mt-2">
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-lg font-medium">
                    How can I track my order?
                    </div>
                    <div className="collapse-content">
                        <p>Once your order is shipped, you'll receive a confirmation email with a tracking number and a link to track your package's journey in real-time. You can also log in to your account on our website to view order status and tracking information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;