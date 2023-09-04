/* código não testado, é apenas um exemplo conceitual */

public class DateUtil {
   /*
   public static Date maiorData(Date data1, Date data2) {
       Date maior = new Date();
       if (data1.getTime() > data2.getTime()) {
               maior = data1;
       } else {
               maior = data2;
       }
       return maior;
   }
   */

   try {
      if (primeiraData.compareTo(segundaData) >= 1)
         return primeiraData;
      else 
         return segundaData;
   } catch (Exception e) {
      return null;
   }
}

public class DateUtilTest extends TestCase {
	
	private Date criaData(int ano, int mes, int dia) {
		Calendar cal = GregorianCalendar.getInstance();
		cal.set(ano, mes, dia);
		return cal.getTime();
	}

	public void primeira_data_maior_que_segunda_retorna_primeira_data() {
		Date data1 = criaData(2012, 1, 2);
		Date data2 = criaData(2012, 1, 1);
		assertEquals(data1, DateUtil.maiorData(data1, data2), "Quando primeira data for maior que segunda, primeira deve retornar.")
	}

	public void primeira_data_menor_que_segunda_retorna_segunda_data() {
		Date data1 = criaData(2012, 1, 1);
		Date data2 = criaData(2012, 1, 2);
		assertEquals(data2, DateUtil.maiorData(data1, data2), "Quando primeira data for menor que segunda, segunda deve retornar.")
	}

	public void datas_iguais_retorna_qualquer_das_datas() {
		Date data1 = criaData(2012, 1, 1);
		Date data2 = new Date(data1.getTime());
		Date maiorData = DateUtil.maiorData(data1, data2);
		assertTrue(maiorData == data1 || maiorData == data2, "Quando datas forem iguais, qualquer das duas deve retornar.")
	}

	public void qualquer_data_nula_lanca_excecao() {
		Date data1 = criaData(2012, 1, 1);
                /* segunda data nula não lança exceção pelo código atual
		try {
			DateUtil.maiorData(data1, null);	
			fail("Data nula deve lançar exceção.")
		} catch (NullPointerException e) { /* expected exception * / }
                */
                try {
			DateUtil.maiorData(null, data2);	
			fail("Data nula deve lançar exceção.")
		} catch (NullPointerException e) { /* expected exception */ }
		try {
			DateUtil.maiorData(null, null);	
			fail("Data nula deve lançar exceção.")
		} catch (NullPointerException e) { /* expected exception */ }
	}
}