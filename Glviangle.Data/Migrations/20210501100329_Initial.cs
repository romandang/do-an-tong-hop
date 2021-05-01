using Microsoft.EntityFrameworkCore.Migrations;

namespace Glviangle.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Alias = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sample",
                columns: table => new
                {
                    Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sample", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "CategoryChild",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CategoryParentId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Alias = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryChild", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CategoryChild_Category_CategoryParentId",
                        column: x => x.CategoryParentId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Category",
                columns: new[] { "Id", "Alias", "CategoryName" },
                values: new object[,]
                {
                    { "Cate01", "benh-vien", "Bệnh viện" },
                    { "Cate02", "kham-pha", "Khám phá" },
                    { "Cate03", "dich-vu", "Dịch vụ" },
                    { "Cate04", "len-ke-hoach", "Lên kế hoạch" }
                });

            migrationBuilder.InsertData(
                table: "CategoryChild",
                columns: new[] { "Id", "Alias", "CategoryName", "CategoryParentId" },
                values: new object[] { "CCate01", "dien-thoai-samsung", "Điện thoại Samsung", "Cate01" });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryChild_CategoryParentId",
                table: "CategoryChild",
                column: "CategoryParentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoryChild");

            migrationBuilder.DropTable(
                name: "Sample");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
