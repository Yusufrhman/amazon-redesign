const FormSection = ({ title, children }) => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center w-full">
      <h2 className="w-fit font-bold text-2xl text-left text-white rounded-full relative mx-auto">
        {title}
      </h2>
      <div className="space-y-4 md:space-y-6 w-full">{children}</div>
    </section>
  );
};

export default FormSection;
