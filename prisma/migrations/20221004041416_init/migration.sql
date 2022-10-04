-- CreateTable
CREATE TABLE "Organization" (
    "id" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "status" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "Tribe" (
    "id" INT4 NOT NULL,
    "id_organization" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "status" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "Repository" (
    "id" INT4 NOT NULL,
    "id_tribe" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "state" STRING NOT NULL,
    "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" STRING NOT NULL,
    "organizationId" INT4
);

-- CreateTable
CREATE TABLE "Metrics" (
    "id_repository" INT4 NOT NULL,
    "bugs" INT4 NOT NULL,
    "vulnerabilities" INT4 NOT NULL,
    "hotspot" INT4 NOT NULL,
    "code_smells" INT4 NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_id_key" ON "Organization"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tribe_id_key" ON "Tribe"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_id_key" ON "Repository"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Metrics_id_repository_key" ON "Metrics"("id_repository");

-- AddForeignKey
ALTER TABLE "Tribe" ADD CONSTRAINT "Tribe_id_organization_fkey" FOREIGN KEY ("id_organization") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_id_tribe_fkey" FOREIGN KEY ("id_tribe") REFERENCES "Tribe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metrics" ADD CONSTRAINT "Metrics_id_repository_fkey" FOREIGN KEY ("id_repository") REFERENCES "Repository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
