import { useState, ChangeEvent, FormEvent } from 'react';

export function useForm<T extends Record<string, any>>(initialValues: T, onSubmit: (values: T) => void) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value } as any));
  };

  const handleCustomChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value } as any));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, errors, handleChange, handleCustomChange, handleSubmit, setErrors, setValues };
}
