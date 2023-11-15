import { Category } from "@/components/Category"
import Title from "@/components/Title"
import { categories } from "@/mock/categories"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
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
    </main>
  )
}
