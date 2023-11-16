import { Category } from "@/components/Category"
import { Schedule } from "@/components/Schedule"
import Title from "@/components/Title"
import { categories } from "@/mock/categories"
import { schudules } from "@/mock/schedules"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10">
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
    </main>
  )
}
