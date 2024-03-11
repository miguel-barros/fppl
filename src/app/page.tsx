import { Category } from "@/components/Category"
import { Event } from "@/components/Event"
import { Schedule } from "@/components/Schedule"
import SocialMedia from "@/components/SocialMedia"
import TextArea from "@/components/TextArea"
import Title from "@/components/Title"
import Warning from "@/components/Warning"
import { categories } from "@/mock/categories"
import { events } from "@/mock/events"
import { schudules } from "@/mock/schedules"

export default function Home() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center gap-10">
      <Warning
        title="Convocação de Assembleia geral"
        link="/docs/convocacao-assembleia-2024.pdf"
      />
      <section className="flex h-fit w-full flex-col gap-5">
        <Title
          title="Navegue por categoria"
          subTitle="Encontre a informação desejada pelas opções abaixo:"
        />
        <Category.Grid>
          {categories.map((category, indx) => (
            <Category.Card
              key={indx}
              {...category}
              className="basis-1/5 max-sm:snap-center max-sm:px-16"
            />
          ))}
        </Category.Grid>
      </section>
      <section className="flex h-fit w-full flex-col gap-5">
        <Title
          title="Agenda"
          subTitle="Encontre as datas confirmadas dos proximos eventos abaixo:"
        />
        <Warning
          title="Calendario Oficial"
          link="/docs/calendario-fppl-2024.pdf"
        />
        <Schedule.Grid>
          {Object.entries(schudules).map(([month, schedule]) => {
            if (!schedule?.events?.length) return null
            return (
              <div key={month} className="flex gap-12">
                {schedule.events.map((event, eventIndex) => (
                  <Schedule.Card
                    key={eventIndex}
                    image={event.image}
                    title={event.title}
                    date={event.dates}
                  />
                ))}
              </div>
            )
          })}
        </Schedule.Grid>
      </section>
      <SocialMedia
        links={{
          facebook: "",
          instagram: "",
        }}
      />
      <section className="flex h-fit w-full flex-col gap-5">
        <Title
          title="Eventos Recentes"
          subTitle="Veja abaixo informação sobre os eventos recentes:"
        />
        <Event.Grid>
          {events.map((event, indx) => (
            <Event.Card
              key={indx}
              title={event.title}
              description={event.description}
              type={event.type}
              image={event.image}
            />
          ))}
        </Event.Grid>
      </section>
      <section>
        <TextArea
          text="A FPPL (Federação Paulista de Pesca e Lançamento) é uma instituição pioneira no estado de São Paulo, tendo sido fundada em 1969. Sua principal missão é promover a prática da pesca amadora e de competição, enquanto trabalha ativamente para difundir e proteger esse esporte em todas as suas vertentes, sem qualquer forma de preconceito. É importante destacar que a FPPL mantém uma estreita parceria com a Confederação Brasileira de Pesca e Lançamento - Nova Pesca Brasil, visando a democratização das decisões e normas no âmbito nacional, contando com a colaboração de todas as Federações Estaduais que fazem parte dessa organização."
          image="/assets/storage/equipe-fppl.jpeg"
        />
      </section>
    </main>
  )
}
