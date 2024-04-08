"use client";

import Image from "next/image";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import yup from "yup";
import { Person } from "./types/person";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPerson } from "./helper/SchemaValidate";
import { NumberInput, ShortTextInput } from './components/Inputs';
import { Button } from '@/components/Button';

export default function Home() {

    const methods = useForm<Person>({
      resolver: yupResolver(createPerson),
    });

    const onSubmit: SubmitHandler<Person> = (data) => {
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold underline pb-5">
          Formulario de datos basicos
        </h1>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>

            <div className='grid grid-cols-2 gap-5'>

              <div className='flex flex-col gap-3'>
                <ShortTextInput name="nombre" title='Nombre' />
                <ShortTextInput name="apellido" title='Apellido' />
              </div>

              <div className='flex flex-col gap-3'>
                <NumberInput name="cedula" title='Cédula' />
                <ShortTextInput name="direccion" title='Dirección' />
              </div>

              {
                <Button                           
                  type="submit"
                  className="bg-dark-purple text-white"
                  size="lg"
                  isLoading={false}>
                  Guardar
                </Button>
                }

            </div>
                         
          </form>
        </FormProvider>

      </div>  
    </main>
  );
}
