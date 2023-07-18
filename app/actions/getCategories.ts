import prisma from "@/app/libs/prismadb";

export interface ICategoriesParams {
    createdAt: string;
    updatedAt: string;
    id: string;
    name: string;
    name_en: string;
    name_es: string;
    name_fr: string;
    name_de: string;
    icon: string;
    description_en: string;
    description_es: string;
    description_fr: string;
    description_de: string;
}

export default async function getCategories(params: {language: string}) {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeCategories = categories.map((category) => ({
      ...category,
      createdAt: category.createdAt.toISOString(),
      updatedAt: category.updatedAt.toISOString(),
    }));

    return safeCategories;
  } catch (error: any) {
    throw new Error(error);
  }
}
