import {FC, memo} from 'react';
import {useForm, ValidationError} from '@formspree/react';

const ContactForm: FC = memo(() => {
  const [state, handleSubmit] = useForm("mdknrdnl");

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  if (state.succeeded) {
    return <p className="text-green-500">Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSubmit}>
      <input 
        className={inputClasses} 
        name="name" 
        placeholder="Name" 
        required 
        type="text" 
      />
      <ValidationError errors={state.errors} field="name" prefix="Name" />
      
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        placeholder="Email"
        required
        type="email"
      />
      <ValidationError errors={state.errors} field="email" prefix="Email" />
      
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        placeholder="Message"
        required
        rows={6}
      />
      <ValidationError errors={state.errors} field="message" prefix="Message" />
      
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={state.submitting}
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
