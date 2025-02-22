import pro1 from "../images/pro1.png"; 
import pro2 from "../images/pro2.jpeg";
import pro3 from "../images/pro3.png";
import pro4 from "../images/pro4.png";
import pro5 from "../images/pro5.jpg";
import pro6 from "../images/pro6.webp";
import pro7 from "../images/pro7.jpeg";
import pro8 from "../images/pro8.jpeg";
import pro9 from "../images/pro9.jpeg";
import pro10 from "../images/pro10.jpeg";
import sto1 from "../images/sto1.jpeg";
import sto2 from "../images/sto2.jpg";
import sto3 from "../images/sto3.avif";
import sto4 from "../images/sto4.jpg";
import sto5 from "../images/sto5.jpeg";
const data = {
  heroSection: [
    { id: 1, imageUrl: "he1.webp", altText: "عروض خاصة على الإلكترونيات", title: "تسوق الآن واحصل على خصومات تصل إلى 50%", description: "اكتشف أحدث العروض على الإلكترونيات والأجهزة المنزلية." },
    { id: 2, imageUrl: "he2.webp", altText: "أزياء رجالية ونسائية", title: "موضة جديدة لكل الفصول", description: "تصفح أحدث تشكيلات الأزياء الرجالية والنسائية." },
    { id: 3, imageUrl: "he3.webp", altText: "أجهزة كهربائية حديثة", title: "تحديث منزلك بأحدث الأجهزة", description: "احصل على أفضل الأجهزة الكهربائية بأسعار تنافسية." },
  ],
  
  products: [
    { id: 1, name: "هاتف ذكي X1", description: "هاتف ذكي بمواصفات عالية وكاميرا ممتازة.", price: 1500, imageUrl: pro1, category: "إلكترونيات", storeId: 1 },
    { id: 2, name: "لابتوب فائق السرعة", description: "لابتوب بمعالج قوي وذاكرة عالية الأداء.", price: 4500, imageUrl: pro2, category: "إلكترونيات", storeId: 1 },
    { id: 3, name: "سماعات لاسلكية", description: "سماعات لاسلكية بتقنية إلغاء الضوضاء.", price: 600, imageUrl: pro3, category: "إلكترونيات", storeId: 1 },
    { id: 4, name: "ساعة ذكية", description: "ساعة ذكية بتتبع اللياقة البدنية ومراقبة النوم.", price: 800, imageUrl: pro4, category: "إلكترونيات", storeId: 4 },
    { id: 5, name: "كاميرا احترافية", description: "كاميرا DSLR بجودة تصوير عالية الدقة.", price: 3000, imageUrl: pro5, category: "إلكترونيات", storeId: 4 },
    { id: 6, name: "حقيبة ظهر", description: "حقيبة ظهر بتصميم عصري ومريح.", price: 200, imageUrl: pro6, category: "أزياء", storeId: 2 },
    { id: 7, name: "نظارة شمسية", description: "نظارة شمسية بتصميم أنيق وحماية من الأشعة فوق البنفسجية.", price: 150, imageUrl: pro7, category: "أزياء", storeId: 2 },
    { id: 8, name: "جهاز تحكم عن بعد", description: "جهاز تحكم عن بعد متوافق مع أجهزة التلفاز الذكية.", price: 100, imageUrl: pro8, category: "أجهزة منزلية", storeId: 3 },
    { id: 9, name: "ميكروويف", description: "ميكروويف سعة 20 لتر مع شواية.", price: 700, imageUrl: pro9, category: "أجهزة منزلية", storeId: 3 },
    { id: 10, name: "غسالة ملابس", description: "غسالة ملابس بسعة 8 كيلو وبرامج متعددة.", price: 2500, imageUrl: pro10, category: "أجهزة منزلية", storeId: 3 },
  ],
  
  stores: [
    { id: 1, name: "متجر الإلكترونيات الذهبي", description: "متجر متخصص في بيع الأجهزة الإلكترونية والهواتف الذكية.", location: "عمّان، الأردن", logo: sto1 },
    { id: 2, name: "متجر الأزياء الحديثة", description: "متجر يقدم أحدث صيحات الموضة للرجال والنساء.", location: "دبي، الإمارات", logo: sto2 },
    { id: 3, name: "متجر الأجهزة المنزلية", description: "متجر يقدم أفضل الأجهزة الكهربائية والمنزلية.", location: "القاهرة، مصر", logo: sto3 },
    { id: 4, name: "متجر التكنولوجيا المتقدمة", description: "متجر متخصص في بيع الأجهزة التكنولوجية الحديثة.", location: "الرياض، السعودية", logo: sto4 },
    { id: 5, name: "متجر الإكسسوارات", description: "متجر يقدم تشكيلة واسعة من الإكسسوارات والأدوات المنزلية.", location: "الكويت", logo: sto5 },
  ],
};

export default data;
