import { Category } from "@/components/Category"
import { Event } from "@/components/Event"
import { Schedule } from "@/components/Schedule"
import SocialMedia from "@/components/SocialMedia"
import Title from "@/components/Title"
import { categories } from "@/mock/categories"
import { events } from "@/mock/events"
import { schudules } from "@/mock/schedules"

export default function Home() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center gap-10">
      <section className="flex h-fit w-full flex-col gap-5">
        <Title
          title="Navegue por categoria"
          subTitle="Encontre a informação desejada pelas opções abaixo:"
        />
        <Category.Grid>
          {categories.map((category, indx) => (
            <Category.Card
              key={indx}
              icon={category.icon}
              title={category.title}
              description={category.description}
              className="basis-1/5"
            />
          ))}
        </Category.Grid>
      </section>
      <section className="flex h-fit w-full flex-col gap-5">
        <Title
          title="Agenda"
          subTitle="Encontre as datas confirmadas dos proximos eventos abaixo:"
        />
        <Schedule.Grid>
          {schudules.map((schedule, indx) => (
            <Schedule.Card
              key={indx}
              title={schedule.title}
              date={schedule.date}
              image={schedule.image}
            />
          ))}
        </Schedule.Grid>
      </section>
      <SocialMedia />
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
              image={event.image}
              description={event.description}
              type={event.type}
            />
          ))}
        </Event.Grid>
      </section>
    </main>
  )
}
