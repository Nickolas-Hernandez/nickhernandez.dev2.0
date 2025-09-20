<template> 
    <div class="">
        <ContentRenderer v-if="home" :value="home" />
        <Hero />
        <About />
        <Projects />
        <Articles />
        <!-- <Testimonials /> -->
        <FAQ />
        <Contact />
    </div>
</template>
