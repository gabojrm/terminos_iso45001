var words = [
    { 'id': 'altadireccion', 'descrip': '<b>ALTA DIRECCIÓN</b>: Persona o grupo de personas que dirige y controla una organización al más alto nivel.' },
    { 'id': 'eficacia', 'descrip': '<b>EFICACIA</b>: Grado en el que se realizan las actividades planificadas y se alcanzan los resultados planificados' },
    { 'id': 'politica', 'descrip': '<b>POLÍTICA</b>: Intenciones y dirección de una organización, como las expresa formalmente su alta dirección.' },
    { 'id': 'politicaseguridad', 'descrip': '<b>POLÍTICA DE LA SEGURIDAD Y SALUD EN EL TRABAJO</b>: Para prevenir lesiones y deterioro de la salud relacionados con el trabajo a los trabajadores, y para proporcionar lugares de trabajo seguros y saludables' },
    { 'id': 'objetivo', 'descrip': '<b>OBJETIVO</b>: Resultado a alcanzar' },
    { 'id': 'objetivosst', 'descrip': '<b>OBJETIVO DE LA SEGURIDAD Y SALUD EN EL TRABAJO</b>: Objetivo establecido por la organización para lograr resultados específicos coherentes con la política de la SST.' },
    { 'id': 'lesionsalud', 'descrip': '<b>LESIÓN Y DETERIORO DE LA SALUD</b> Efecto adverso en la condición física, mental o cognitiva de una persona' },
    { 'id': 'deteriorosalud', 'descrip': '<b>LESIÓN Y DETERIORO DE LA SALUD</b> Efecto adverso en la condición física, mental o cognitiva de una persona' },
    { 'id': 'peligro', 'descrip': '<b>PELIGRO</b>: Fuente con un potencial para causar lesiones y deterioro de la salud.' },
    { 'id': 'riesgo', 'descrip': '<b>RIESGO</b>: Efecto de la incertidumbre' },
    { 'id': 'organizacion', 'descrip': '<b>ORGANIZACIÓN</b>: Persona o grupo de personas que tiene sus propias funciones con responsabilidades, autoridades y relaciones para el logro de sus objetivos.' },
    { 'id': 'parteinteresada', 'descrip': '<b>PARTE INTERESADA</b>: Persona u organización  que puede afectar, verse afectada, o percibirse como afectada por una decisión o actividad.' },
    { 'id': 'trabajador', 'descrip': '<b>TRABAJADOR</b>: Persona que realiza trabajo o actividades relacionadas con el trabajo que están bajo el control de la organización ' },
    { 'id': 'participacion', 'descrip': '<b>PARTICIPACIÓN</b>: Acción y efecto de involucrar en la toma de decisiones' },
    { 'id': 'consulta', 'descrip': '<b>CONSULTA</b>: Búsqueda de opiniones antes de tomar una decisión' },
    { 'id': 'lugartrabajo', 'descrip': '<b>LUGAR DE TRABAJO</b>: Lugar bajo el control de la organización donde una persona necesita estar o ir por razones de trabajo' },
    { 'id': 'contratista', 'descrip': '<b>CONTRATISTA</b>: Externa que proporciona servicios a la organización de acuerdo con las especificaciones, términos y condiciones acordados' },
    { 'id': 'requisito', 'descrip': '<b>REQUISITO</b>: Necesidad o expectativa establecida, generalmente implícita u obligatoria' },
    { 'id': 'requisitoslegales', 'descrip': '<b>REQUISITOS LEGALES Y OTROS REQUISITOS</b>: Requisitos legales que una organización tiene que cumplir y otros requisitos que una organización tiene que cumplir o que elige cumplir' },
    { 'id': 'sistemagestion', 'descrip': '<b>SISTEMA DE GESTIÓN</b>: Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas, objetivos y procesos para lograr estos objetivos. ' },
    { 'id': 'sgsst', 'descrip': '<b>SISTEMA DE GESTIÓN DE LA SEGURIDAD Y SALUD EN EL TRABAJO</b>: Sistema de gestión o parte de un sistema de gestión utilizado para alcanzar la política de la SST.' },

    { 'id': 'riesgosst', 'descrip': '<b>RIESGO PARA LA SEGURIDAD Y SALUD EN EL TRABAJO</b>: Combinación de la probabilidad de que ocurran eventos o exposiciones peligrosos relacionados con el trabajo y la severidad de la lesión y deterioro de la salud que pueden causar los eventos o exposiciones.' },
    { 'id': 'oportunidadsst', 'descrip': '<b>OPORTUNIDAD PARA LA SEGURIDAD Y SALUD EN EL TRABAJO</b>: Circunstancia o conjunto de circunstancias que pueden conducir a la mejora del desempeño de la SST.' },
    { 'id': 'competencia', 'descrip': '<b>COMPETENCIA</b>: Capacidad para aplicar conocimientos y habilidades con el fin de alcanzar los resultados previstos' },
    { 'id': 'informaciondocumentada', 'descrip': '<b>INFORMACIÓN DOCUMENTADA</b>: Información que una organización tiene que controlar y mantener, y el medio que la contiene' },
    { 'id': 'proceso', 'descrip': '<b>PROCESO</b>: Conjunto de actividades interrelacionadas o que interactúan, que transforma las entradas en salidas' },
    { 'id': 'procedimiento', 'descrip': '<b>PROCEDIMIENTO</b>: Forma especificada de llevar a cabo una actividad o un proceso.' },
    { 'id': 'desempeño', 'descrip': '<b>DESEMPEÑO</b>: Resultado medible' },
    { 'id': 'desempeñosst', 'descrip': '<b>DESEMPEÑO DE LA SEGURIDAD Y SALUD EN EL TRABAJO</b>: Desempeño relacionado con la eficacia de la prevención de lesiones y deterioro de la salud para los trabajadores y de la provisión de lugares de trabajo seguros y saludables' },
    { 'id': 'contratarexternamente', 'descrip': '<b>CONTRATAR EXTERNAMENTE, VERBO</b>: Establecer un acuerdo mediante el cual una organización externa realiza parte de una función o proceso de una organización' },
    { 'id': 'seguimiento', 'descrip': '<b>SEGUIMIENTO</b>: Determinación del estado de un sistema, un proceso o una actividad' },
    { 'id': 'medicion', 'descrip': '<b>MEDICIÓN</b>: Proceso para determinar un valor' },
    { 'id': 'auditoria', 'descrip': '<b>AUDITORÍA</b>: Proceso sistemático, independiente y documentado para obtener las evidencias de auditoría y evaluarlas de manera objetiva con el fin de determinar el grado en el que se cumplen los criterios de auditoría' },
    { 'id': 'conformidad', 'descrip': '<b>CONFORMIDAD</b>: Cumplimiento de un requisito.' },
    { 'id': 'noconformidad', 'descrip': '<b>NO CONFORMIDAD</b>: Incumplimiento de un requisito.' },
    { 'id': 'incidente', 'descrip': '<b>INCIDENTE</b>: Suceso que surge del trabajo o en el transcurso del trabajo que podría tener o tiene como resultado lesiones y deterioro de la salud.' },
    { 'id': 'accioncorrectiva', 'descrip': '<b>ACCIÓN CORRECTIVA</b>: Acción para eliminar la causa de una no conformidad o un incidente y prevenir que vuelva a ocurrir.' },
    { 'id': 'mejoracontinua', 'descrip': '<b>MEJORA CONTINUA</b>: Actividad recurrente para mejorar el desempeño.' }

];

function findMeaning(word) {
    var meaning;
    words.forEach(data => {
        if (data.id === word) {
            meaning = data.descrip;
        }
    });
    return meaning;
}

$('#element').toast('hide');