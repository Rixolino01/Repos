1 - Instalar as depedências


id       Int    @id @default(autoincrement())
  name  String
  email String  @unique
  password String