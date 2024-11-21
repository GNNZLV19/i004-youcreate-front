import React from "react";

const WhyUs: React.FC = () => {
  const whyUsData = [
    {
      title: "Diseñado para influencers",
      description:
        "Entendemos las necesidades financieras únicas de los creadores de contenido. YouCreate ha sido desarrollada para ofrecerte herramientas que se adaptan a tu estilo de vida y la dinámica de tus ingresos.",
    },
    {
      title: "Todo en un solo lugar",
      description:
        "Ya no necesitas múltiples plataformas para gestionar tus finanzas. Con YouCreate, tienes acceso a el seguimiento de tus ingresos, la gestión de impuestos y puedes realizar pagos desde la plataforma. ",
    },
    {
      title: "Inteligente e intuitivo",
      description:
        "La tecnología debe simplificar, no complicar. Por eso, YouCreate combina una interfaz intuitiva con tecnología avanzada, brindándote una experiencia fácil, para que te enfoques en lo que realmente importa: crear.",
    },
  ];
  return (
    <div className="text-[#5B0068]">
      <h2 className="text-center font-bold text-2xl lg:text-3xl my-12 md:my-24 lg:my-32">
        ¿Por qué elegir You Create?
      </h2>
      <div className="md:flex gap-x-7">
        {whyUsData.map(({ title, description }, index) => {
          return (
            <div className="space-y-10 border-[3px] rounded-lg border-[#5B0068] lg:min-h-[410px] flex flex-col mb-20 lg:mb-52" key={index}>
                <h3 className="text-xl md:text-xl lg:text-[28px] text-center font-bold px-2 pt-11">{title}</h3>
                <p className="text-lg md:text-xl lg:text-[26px] text-center px-4 pb-9">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;