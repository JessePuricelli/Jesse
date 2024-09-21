declare module '@formspree/react' {
  export function useForm(formId: string): [
    {
      succeeded: boolean;
      submitting: boolean;
      errors: { [key: string]: string };
    },
    (e: React.FormEvent<HTMLFormElement>) => void
  ];

  export function ValidationError(props: {
    field: string;
    prefix: string;
    errors?: { [key: string]: string };
  }): JSX.Element | null;

  export function FormspreeProvider(props: {
    project?: string;
    children: React.ReactNode;
  }): JSX.Element;
}
