import type { NextPage } from "next";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import { trpc } from "../../utils/trpc";

type Inputs = {
  gridId: string;
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const deleteGrid = trpc.proxy.grid.deleteGrid.useMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    deleteGrid.mutate({ gridId: data.gridId });
  };

  return (
    <body className="antialiased font-sans bg-gray-200 overflow-hidden">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <>
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Delete grid
                    </h3>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="gridId"
                          >
                            Delete a Grid
                          </label>
                          <input
                            {...register("gridId", { required: true })}
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="gridId"
                          />
                          {errors.gridId && <p>This field is required</p>}
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>
          </>
        </div>
      </div>
    </body>
  );
};

export default Home;
