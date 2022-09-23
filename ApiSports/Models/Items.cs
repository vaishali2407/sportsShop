namespace ApiSports.Models
{
    public class Items
    {
        public int ItemNumber { get; set; }
        public string ItemName { get; set; } = null!;
        public decimal ?ItemValue { get; set; }
    }
}
